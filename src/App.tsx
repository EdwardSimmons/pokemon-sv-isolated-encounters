import { Container, Typography } from "@mui/material"
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
      <Container maxWidth="sm" sx={{ py: 3, backgroundColor: "#FFFFFF" }}>
        <Typography variant="h5">Pokémon Scarlet & Violet</Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Isolated Encounter Optimisation Tool
        </Typography>
        <VersionSelect />
        <RegionSelect />
        <ShinyHuntSelect />
        <Map />
        <PokemonInfo ref={pokemonInfoRef} />
      </Container>
    </>
  )
}
