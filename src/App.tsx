import { Container } from "@mui/material"
import { useState } from "react"
import { PokemonInfo } from "./features/pokemon/Pokemon"
import { Loader } from "./Loader"
import VersionSelect, { GameVersion } from "./VersionSelect"
import RegionSelect from "./RegionSelect"
import Map from "./Map"
import ShinyHuntSelect from "./ShinyHuntSelect"

export default function App() {
  // Component state

  // App state

  // const pokemonOfSelectedType = useAppSelector(selectPokemonOfType)

  return (
    <>
      <Loader />
      <Container maxWidth="sm" sx={{ py: 3 }}>
        <VersionSelect />
        <RegionSelect />
        <Map />
        <ShinyHuntSelect />
        <PokemonInfo />
      </Container>
    </>
  )
}

// Need to do a big fetch loop to add type information to pokefilter table
// go through pokeFilter
// if key // 10, then fetch
// add types to key
// print entire thing as json?

// Type Select
//  - fetch type info -> name []
//  - filter name [] by comparing with pokedex -> pokemon []
//  - fetch pokemon [] to get icons -> pokemon buttons
//  - on push button, carry out pokemon select routine
