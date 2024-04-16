import { Container } from "@mui/material"
import { useEffect, useRef } from "react"
import { PokemonInfo } from "./features/pokemon/Pokemon"
import { Loader } from "./Loader"
import VersionSelect from "./VersionSelect"
import RegionSelect from "./RegionSelect"
import Map from "./Map"
import ShinyHuntSelect from "./ShinyHuntSelect"
import { useAppSelector } from "./app/hooks"
import { selectPokeFilterId } from "./features/pokemon/pokeFilterIdSlice"
import { selectMapMarker } from "./features/map/mapSlice"

export default function App() {
  const selectedPokeFilterId = useAppSelector(selectPokeFilterId)
  const selectedMapMarker = useAppSelector(selectMapMarker)
  const pokemonInfoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedPokeFilterId && pokemonInfoRef.current) {
      pokemonInfoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [selectedPokeFilterId, selectedMapMarker])

  return (
    <>
      <Loader />
      <Container maxWidth="sm" sx={{ py: 3 }}>
        <VersionSelect />
        <RegionSelect />
        <ShinyHuntSelect />
        <Map />
        <PokemonInfo ref={pokemonInfoRef} />
      </Container>
    </>
  )
}

// Type Select
//  - fetch type info -> name []
//  - filter name [] by comparing with pokedex -> pokemon []
//  - fetch pokemon [] to get icons -> pokemon buttons
//  - on push button, carry out pokemon select routine
