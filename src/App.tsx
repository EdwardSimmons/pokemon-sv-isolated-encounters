import { Container } from "@mui/material"
import { useState } from "react"
import { PokemonInfo } from "./features/pokemon/Pokemon"
import { Loader } from "./Loader"
import VersionSelect, { GameVersion } from "./VersionSelect"
import RegionSelect from "./RegionSelect"
import Map from "./Map"
import ShinyHuntSelect from "./ShinyHuntSelect"

export default function App() {
  return (
    <>
      <Loader />
      <Container maxWidth="sm" sx={{ py: 3 }}>
        <VersionSelect />
        <RegionSelect />
        <ShinyHuntSelect />
        <PokemonInfo />
        <Map />
      </Container>
    </>
  )
}

// Type Select
//  - fetch type info -> name []
//  - filter name [] by comparing with pokedex -> pokemon []
//  - fetch pokemon [] to get icons -> pokemon buttons
//  - on push button, carry out pokemon select routine
