// // Initialize the map
// var map = L.map("map", {
//     minZoom: 1,
//     maxZoom: 3,
//     crs: L.CRS.Simple,
//   }).setView([0, 0], 1); //setView([lat, long], default zoom level)

//   var showCoord = L.control.coordinates({
//     position: "bottomleft",
//     customLabelFcn: function (latLonObj, opts) {
//       var y = latLonObj.lng;
//       var x = latLonObj.lat;
//       return (
//         "Z:" +
//         map.getZoom() +
//         "&nbsp;&nbsp;Y:" +
//         y.toFixed(1) +
//         "&nbsp;&nbsp;X:" +
//         x.toFixed(1)
//       );
//     },
//   });
//   showCoord.addTo(map);

//   if (typeof Number.prototype.toRad === "undefined") {
//     Number.prototype.toRad = function () {
//       return (this * Math.PI) / 180;
//     };
//   }

//   var southWest = map.unproject([0, 4096], map.getMaxZoom());
//   var northEast = map.unproject([4096, 0], map.getMaxZoom());
//   map.setMaxBounds(new L.LatLngBounds(southWest, northEast));

//   L.tileLayer(
//     "https://www.serebii.net/pokearth/paldea/map/tile_{z}-{x}-{y}.png",
//     {
//       minZoom: 0,
//       maxZoom: 3,
//       noWrap: true,
//       reuseTiles: true,
//       attribution: "Pok&eacute;mon Scarlet & Violet", //map label in bottom right
//     }
//   ).addTo(map);

//   var layPokeFilter = L.featureGroup(); // pokemon search results are displayed on this layer

import {
  LatLngBounds,
  marker,
  LatLng,
  LatLngExpression,
  LatLngTuple,
} from "leaflet"
import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { useAppSelector } from "./app/hooks"
import { selectPokeFilterId } from "./features/pokemon/pokeFilterIdSlice"
import { selectMapRegion, selectPokedex } from "./features/pokemon/pokedexSlice"
import { MapRegion } from "./RegionSelect"
import { MarkerInfo } from "./data/dataTypes"
import { paldeaMarkers } from "./data/paldea"
import { kitakamiMarkers } from "./data/kitakami"
import { terariumMarkers } from "./data/terarium"
import { layPokeball } from "./data/mapSupport"

/**
 * Converts Serebii map marker coordinates into CRS.Simple coordinates.
 * @param coords Serebii map marker coords
 * @param factor The scale factor used to converd the coords.
 *               Paldea uses 5000, Kitikami & the Terarium use 2000
 * @returns Coordinates in CRS.Simple form of [y, x]
 */
function convert(coords: LatLngTuple, factor = 2000): LatLngTuple {
  const x = coords[0] * (512 / factor)
  const y = coords[1] * -1 * (512 / factor)
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

  if (!!selectedPokemon) {
    selectedPokedex[selectedPokemon].tableIDs.forEach(tableId => {
      const markerInfo = selectedMarkers.find(m => m.tableID === tableId)
      if (markerInfo) {
        marker(convert(markerInfo.coords, scaleFactor), {
          icon: markerInfo.icon,
        }).addTo(layPokeball)
      }
    })
    layPokeball.addTo(map)
  } else {
    layPokeball.clearLayers()
  }

  // const m = marker(convert([2400, 3042])).addTo(map)

  // return (
  //   <Marker position={[0, 0]} >
  //     <Popup>Test</Popup>
  //   </Marker>
  // )
  return null
}
