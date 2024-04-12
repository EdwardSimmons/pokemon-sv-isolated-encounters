import { GameVersion } from "@/VersionSelect"
import { PokemonType } from "@/features/pokemon/pokemonApiSlice"
import { FeatureGroup, Icon } from "leaflet"

export interface PokeFilter {
  // National Pokédex number x 10
  // E.g. Bulbasaur === 10, Lechonk === 9150
  // The extra digit allows for regional variants, different forms etc.
  [n: number]: {
    tableIDs: number[] // Map grid table IDs where that Pokémon spawns.
    name: string
    types: PokemonType[]
    shinySprite: string
    exclusiveTo?: GameVersion
  }
}

export interface MarkerInfo {
  coords: number[] // Map coordinates
  icon: Icon // Leaflet icon.
  tableID: number // ID that corresponds to the filter table for that region.
  layer: FeatureGroup // Leaflet feature group.
}
