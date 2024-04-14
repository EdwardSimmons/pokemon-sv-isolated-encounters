import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { MapRegion } from "@/RegionSelect"
import { PokeFilter } from "@/data/dataTypes"
import { paldeaPokeFilter } from "@/data/paldea"
import { kitakamiPokeFilter } from "@/data/kitakami"
import { terariumPokeFilter } from "@/data/terarium"
import { GameVersion } from "@/VersionSelect"

export interface PokedexState {
  gameVersion: GameVersion
  mapRegion: MapRegion
  pokedex: PokeFilter
}

const initialState: PokedexState = {
  gameVersion: GameVersion.SCARLET,
  mapRegion: MapRegion.PALDEA,
  pokedex: filterPokedexByVersion(paldeaPokeFilter, GameVersion.SCARLET),
}

export function getPokeFilter(mapRegion: MapRegion): PokeFilter {
  switch (mapRegion) {
    case MapRegion.PALDEA:
      return paldeaPokeFilter
    case MapRegion.KITIKAMI:
      return kitakamiPokeFilter
    case MapRegion.TERARIUM:
      return terariumPokeFilter
  }
}

function filterPokedexByVersion(
  pokeFilter: PokeFilter,
  gameVersion: GameVersion
): PokeFilter {
  const filterCopy = { ...pokeFilter }

  const otherVersion =
    gameVersion === GameVersion.SCARLET
      ? GameVersion.VIOLET
      : GameVersion.SCARLET

  const keysToDelete = Object.keys(filterCopy).filter(
    key => pokeFilter[parseInt(key)].exclusiveTo === otherVersion
  )

  keysToDelete.forEach(key => {
    delete filterCopy[parseInt(key)]
  })

  return filterCopy
}

export const pokedexSlice = createSlice({
  name: "pokedex",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    setGameVersion: create.reducer(
      (state, action: PayloadAction<GameVersion>) => {
        ;(state.gameVersion = action.payload),
          (state.pokedex = filterPokedexByVersion(
            getPokeFilter(state.mapRegion),
            action.payload
          ))
      }
    ),
    setMapRegion: create.reducer((state, action: PayloadAction<MapRegion>) => {
      state.mapRegion = action.payload
      state.pokedex = filterPokedexByVersion(
        getPokeFilter(action.payload),
        state.gameVersion
      )
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectMapRegion: state => state.mapRegion,
    selectPokedex: state => state.pokedex,
  },
})

// Action creators are generated for each case reducer function.
export const { setGameVersion, setMapRegion } = pokedexSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectMapRegion, selectPokedex } = pokedexSlice.selectors
