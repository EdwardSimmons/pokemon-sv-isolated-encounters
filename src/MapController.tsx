import { LatLngBounds, Icon, FeatureGroup } from "leaflet"
import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"

export const layPokeball = new FeatureGroup()
export const pokeballIcon = new Icon({
  iconUrl: "https://www.serebii.net/pokearth/hisui/icons/pokeball.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

export const layScarlet = new FeatureGroup()
export const scarletIcon = new Icon({
  iconUrl: "/pokearth/hisui/icons/scarletpokeball.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

export const layViolet = new FeatureGroup()
export const violetIcon = new Icon({
  iconUrl: "/pokearth/hisui/icons/violetpokeball.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

export default function MapController() {
  const map = useMap()
  const southWest = map.unproject([0, 4096], map.getMaxZoom())
  const northEast = map.unproject([4096, 0], map.getMaxZoom())
  const bounds = new LatLngBounds(southWest, northEast)
  map.setMaxBounds(bounds)

  return null
}
