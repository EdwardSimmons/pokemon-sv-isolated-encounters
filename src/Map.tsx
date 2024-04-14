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

import { CRS } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"
import MapController from "./MapController"
import { useEffect, useState } from "react"
import { useAppSelector } from "./app/hooks"
import { selectMapRegion } from "./features/pokemon/pokedexSlice"

export default function Map() {
  // App State
  const mapRegion = useAppSelector(selectMapRegion)

  // Local State
  const [mapUrl, setMapUrl] = useState(
    `https://www.serebii.net/pokearth/${mapRegion}/map/tile_{z}-{x}-{y}.png`
  )

  useEffect(() => {
    setMapUrl(
      `https://www.serebii.net/pokearth/${mapRegion}/map/tile_{z}-{x}-{y}.png`
    )
  }, [mapRegion])

  return (
    <MapContainer
      style={{ height: "512px", maxWidth: "512px" }}
      zoom={0}
      center={[0, 0]}
      minZoom={0}
      maxZoom={3}
      scrollWheelZoom={false}
      crs={CRS.Simple}
    >
      <TileLayer
        attribution="Map courtesy of <a href='https://www.serebii.net'>Serebii.net</a>."
        noWrap
        url={mapUrl}
      />
      <MapController />
    </MapContainer>
  )
}
