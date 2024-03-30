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
//   var pokeballIcon = L.icon({
//     iconUrl: "https://www.serebii.net/pokearth/hisui/icons/pokeball.png",
//     iconSize: [32, 32], // size of the icon
//     iconAnchor: [16, 16], // point of the icon which will correspond to marker's location
//   });
//   var violetIcon = L.icon({
//     iconUrl:
//       "https://www.serebii.net/pokearth/hisui/icons/violetpokeball.png",
//     iconSize: [32, 32], // size of the icon
//     iconAnchor: [16, 16], // point of the icon which will correspond to marker's location
//   });
//   var scarletIcon = L.icon({
//     iconUrl:
//       "https://www.serebii.net/pokearth/hisui/icons/scarletpokeball.png",
//     iconSize: [32, 32], // size of the icon
//     iconAnchor: [16, 16], // point of the icon which will correspond to marker's location
//   });
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import { CRS, LatLngBounds } from "leaflet"
import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"

function MapController() {
  const map = useMap()
  const southWest = map.unproject([0, 4096], map.getMaxZoom())
  const northEast = map.unproject([4096, 0], map.getMaxZoom())
  const bounds = new LatLngBounds(southWest, northEast)
  map.setMaxBounds(bounds)
  console.log(map.getCenter())

  return null
}

export enum MapRegion {
  PALDEA = "paldea",
  KITIKAMI = "kitakami",
  TERARIUM = "terarium",
}

export default function Map() {
  const [mapRegion, setMapRegion] = useState<MapRegion>(MapRegion.PALDEA)
  const [mapUrl, setMapUrl] = useState("")

  useEffect(() => {
    setMapUrl(
      `https://www.serebii.net/pokearth/${mapRegion}/map/tile_{z}-{x}-{y}.png`
    )
  }, [mapRegion])

  const handleMapRegionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMapRegion((event.target as HTMLInputElement).value as MapRegion)
  }

  return (
    <>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Select a Region
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          row
          value={mapRegion}
          onChange={handleMapRegionChange}
        >
          <FormControlLabel
            value={MapRegion.PALDEA}
            control={<Radio />}
            label="Paldea"
          />
          <FormControlLabel
            value={MapRegion.KITIKAMI}
            control={<Radio />}
            label="Kitakami"
          />
          <FormControlLabel
            value={MapRegion.TERARIUM}
            control={<Radio />}
            label="Terarium"
          />
        </RadioGroup>
      </FormControl>
      <MapContainer
        style={{ height: "600px" }}
        zoom={0}
        center={[0, 0]}
        minZoom={0}
        maxZoom={3}
        scrollWheelZoom={false}
        crs={CRS.Simple}
      >
        <TileLayer
          attribution="Pok&eacute;mon Scarlet & Violet"
          noWrap
          url={mapUrl}
        />
        <MapController />
      </MapContainer>
    </>
  )
}
