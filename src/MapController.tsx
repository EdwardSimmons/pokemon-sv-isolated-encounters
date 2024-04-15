import { LatLngBounds, marker, LatLngTuple, LeafletMouseEvent } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { selectPokeFilterId } from "./features/pokemon/pokeFilterIdSlice"
import { selectMapRegion, selectPokedex } from "./features/pokemon/pokedexSlice"
import { MapRegion } from "./RegionSelect"
import { MarkerInfo, PokeFilter, Pokemon } from "./data/dataTypes"
import { paldeaMarkers } from "./data/paldea"
import { kitakamiMarkers } from "./data/kitakami"
import { terariumMarkers } from "./data/terarium"
import {
  layPokeball,
  highlightlIcon,
  scarletIcon,
  violetIcon,
  pokeballIcon,
} from "./data/mapSupport"
import { PokemonType } from "./features/pokemon/pokemonApiSlice"
import Str from "./utilities/Str"
import { setMapMarker } from "./features/map/mapSlice"

/**
 * Converts Serebii map marker coordinates into `CRS.Simple` coordinates.
 * @param coords Serebii map marker coords
 * @param scaleFactor The scale scaleFactor used to converd the coords.
 *                    Paldea uses 5000, Kitikami and the Terarium use 2000
 * @returns Coordinates in CRS.Simple form of [y, x]
 */
function convert(coords: LatLngTuple, scaleFactor: number): LatLngTuple {
  const x = coords[0] * (512 / scaleFactor)
  const y = coords[1] * -1 * (512 / scaleFactor)
  return [y, x]
}

function getMarkers(mapRegion: MapRegion): MarkerInfo[] {
  switch (mapRegion) {
    case MapRegion.PALDEA:
      return paldeaMarkers
    case MapRegion.KITIKAMI:
      return kitakamiMarkers
    case MapRegion.TERARIUM:
      return terariumMarkers
  }
}

export interface SpawnRateByType {
  type: PokemonType
  spawnRate: number
}

export interface SpawnRateByTableId {
  tableId: number
  spawnRates: SpawnRateByType[]
}

function getSpawnRatesByTableId(
  pokeFilterId: number,
  pokedex: PokeFilter,
  markers: MarkerInfo[]
): SpawnRateByTableId[] {
  const pokemon = pokedex[pokeFilterId]
  return pokemon.tableIDs.map(tableId => {
    const markerInfo = markers.find(m => m.tableID === tableId)
    const isVersionExclusive =
      !!markerInfo && [scarletIcon, violetIcon].includes(markerInfo.icon)
    return {
      tableId,
      spawnRates: pokemon.types.map(type => {
        const allPokemonOfType = getAllPokemonOfTypeAtTableId(
          type,
          isVersionExclusive
            ? findNonVersionExclusiveMarkerInfo(markerInfo, markers).tableID
            : tableId,
          pokedex
        )
        return {
          type,
          spawnRate: Math.floor(
            100 /
              (isVersionExclusive
                ? allPokemonOfType.length + 1 // because the pokemon itself won't be included
                : allPokemonOfType.length)
          ),
        }
      }),
    }
  })
}

/**
 * @param markerInfo The version exclusive marker to be checked.
 * @param markers List of all markers for the current map.
 * @returns The non-version exclusive equivalent marker if found, the original if not.
 */
function findNonVersionExclusiveMarkerInfo(
  markerInfo: MarkerInfo,
  markers: MarkerInfo[]
): MarkerInfo {
  for (let i = 0; i < markers.length; i++) {
    if (
      markers[i].coords[0] === markerInfo.coords[0] &&
      markers[i].coords[1] === markerInfo.coords[1] &&
      markers[i].tableID !== markerInfo.tableID &&
      markers[i].icon === pokeballIcon
    ) {
      return markers[i]
    }
  }

  return markerInfo
}

function getHighestSpawnRate(
  spawnRatesByTableId: SpawnRateByTableId[],
  mapMarkers: MarkerInfo[]
): number {
  let highestSpawnRate = 0
  for (let i = 0; i < spawnRatesByTableId.length; i++) {
    if (
      spawnRatesByTableId[i].spawnRates.some(
        srbt => srbt.spawnRate > highestSpawnRate
      ) &&
      spawnRatesByTableId[i].tableId < mapMarkers.length
    ) {
      highestSpawnRate = Math.max(
        ...spawnRatesByTableId[i].spawnRates.map(srbt => srbt.spawnRate)
      )
    }
  }
  return highestSpawnRate
}

function isHighestSpawnRate(
  spawnRatesByTableId: SpawnRateByTableId,
  highestSpawnRate: number
): boolean {
  return spawnRatesByTableId.spawnRates.some(
    srbt => srbt.spawnRate === highestSpawnRate
  )
}

function getAllPokemonOfTypeAtTableId(
  type: PokemonType,
  tableId: number,
  pokedex: PokeFilter
): Pokemon[] {
  const filterIds = Object.keys(pokedex).map(id => parseInt(id))
  const pokemon: Pokemon[] = []
  filterIds.forEach(filterId => {
    if (
      pokedex[filterId].types.includes(type) &&
      pokedex[filterId].tableIDs.includes(tableId)
    ) {
      pokemon.push(pokedex[filterId])
    }
  })
  return pokemon
}

function onClickMapMarker(
  tableId: number,
  selectedPokemon: Pokemon,
  selectedPokedex: PokeFilter,
  dispatch: any
): void {
  const allPokemon = selectedPokemon.types.flatMap(type =>
    getAllPokemonOfTypeAtTableId(type, tableId, selectedPokedex)
  )
  dispatch(setMapMarker({ tableId, allPokemon }))
}

export default function MapController() {
  const map = useMap()
  const southWest = map.unproject([0, 4096], map.getMaxZoom())
  const northEast = map.unproject([4096, 0], map.getMaxZoom())
  const bounds = new LatLngBounds(southWest, northEast)
  map.setMaxBounds(bounds)

  const selectedPokemon = useAppSelector(selectPokeFilterId)
  const selectedPokedex = useAppSelector(selectPokedex)
  const selectedMapRegion = useAppSelector(selectMapRegion)
  const selectedMarkers = getMarkers(selectedMapRegion)
  const scaleFactor = selectedMapRegion === MapRegion.PALDEA ? 5000 : 2000

  const dispatch = useAppDispatch()

  if (!!selectedPokemon) {
    // Clear layers each time to ensure no overlaps between selections.
    layPokeball.clearLayers()

    // Need to know the % spawn by type for each tableId
    const spawnRatesByTableId = getSpawnRatesByTableId(
      selectedPokemon,
      selectedPokedex,
      selectedMarkers
    )

    const highestSpawnRate = getHighestSpawnRate(
      spawnRatesByTableId,
      selectedMarkers
    )

    // Place a marker at each tableId, highlighting the one with the highest spawn rate.
    selectedPokedex[selectedPokemon].tableIDs.forEach((tableId, i) => {
      const markerInfo = selectedMarkers.find(m => m.tableID === tableId)
      if (markerInfo) {
        const isVersionExclusive = [scarletIcon, violetIcon].includes(
          markerInfo.icon
        )
        const nonVersionExclusiveMarkerTableId = isVersionExclusive
          ? findNonVersionExclusiveMarkerInfo(markerInfo, selectedMarkers)
              .tableID
          : tableId
        marker(convert(markerInfo.coords, scaleFactor), {
          icon: isHighestSpawnRate(spawnRatesByTableId[i], highestSpawnRate)
            ? highlightlIcon
            : markerInfo.icon,
        })
          .addTo(layPokeball)
          .on("click", () =>
            onClickMapMarker(
              nonVersionExclusiveMarkerTableId,
              selectedPokedex[selectedPokemon],
              selectedPokedex,
              dispatch
            )
          )
          .bindTooltip(
            `Tile ${nonVersionExclusiveMarkerTableId}: ${spawnRatesByTableId[
              i
            ].spawnRates
              .map(
                spawnRateByType =>
                  `${new Str(spawnRateByType.type).toTitleCase()}: ${
                    spawnRateByType.spawnRate
                  }%`
              )
              .join(" | ")}`
          )
      }
    })
    layPokeball.addTo(map)
  } else {
    layPokeball.clearLayers()
  }

  return null
}
