import { Icon, FeatureGroup } from "leaflet"

export const layPokeball = new FeatureGroup()
export const laySelected = new FeatureGroup()

export const pokeballIcon = new Icon({
  iconUrl: "./pokeball.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})
export const highlightIcon = new Icon({
  iconUrl: "./pokeball_highlight.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

export const scarletIcon = new Icon({
  iconUrl: "./scarletpokeball.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

export const violetIcon = new Icon({
  iconUrl: "./violetpokeball.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

export const selectedIcon = new Icon({
  iconUrl: "./pokeball_selected.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})
