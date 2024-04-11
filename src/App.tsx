import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { PokemonInfo } from "./features/pokemon/Pokemon"
import { PokedexName } from "./features/pokemon/pokemonApiSlice"
import {
  selectType,
  selectPokemonOfType,
} from "./features/pokemon/pokemonTypeSlice"
import {
  clearName,
  selectPokemonName,
} from "./features/pokemon/pokemonNameSlice"
import { Loader } from "./Loader"
import VersionSelect, { GameVersion } from "./VersionSelect"
import RegionSelect from "./RegionSelect"
import Map, { MapRegion } from "./Map"
import ShinyHuntSelect from "./ShinyHuntSelect"

export default function App() {
  // Component state
  const [mapRegion, setMapRegion] = useState<MapRegion>(MapRegion.PALDEA)
  const [gameVersion, setGameVersion] = useState<GameVersion>(
    GameVersion.SCARLET
  )
  const [pokedexName, setPokedexName] = useState<PokedexName>(
    PokedexName.PALDEA
  )

  // App state
  const dispatch = useAppDispatch()
  const selectedType = useAppSelector(selectType)
  const selectedPokemon = useAppSelector(selectPokemonName)
  const pokemonOfSelectedType = useAppSelector(selectPokemonOfType)

  useEffect(() => {
    switch (mapRegion) {
      case MapRegion.PALDEA:
        setPokedexName(PokedexName.PALDEA)
        break
      case MapRegion.KITIKAMI:
        setPokedexName(PokedexName.KITIKAMI)
        break
      case MapRegion.TERARIUM:
        setPokedexName(PokedexName.BLUEBERRY)
        break
    }
  }, [mapRegion])

  const handleMapRegionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMapRegion((event.target as HTMLInputElement).value as MapRegion)
    dispatch(clearName())
  }

  const handleGameVersionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGameVersion((event.target as HTMLInputElement).value as GameVersion)
  }

  return (
    <>
      <Loader />
      <Container maxWidth="sm" sx={{ py: 3 }}>
        <VersionSelect
          version={gameVersion}
          onChange={handleGameVersionChange}
        />
        <RegionSelect region={mapRegion} onChange={handleMapRegionChange} />
        <Map region={mapRegion} />
        <ShinyHuntSelect pokedexName={pokedexName} />
        <PokemonInfo name={selectedPokemon} />
      </Container>
    </>
  )
}

// Pokemon select
//  - fetch info                                          -> nat. id #
//  - use nat. id to search the pokeFilter array          -> gridId []
//  - iterate through each gridId, find others that spawn -> % spawn of target
//                                                        -> other nat. ids
//  - fetch info for the other nat. ids                   -> highlght same types

// Type Select
//  - fetch type info -> name []
//  - filter name [] by comparing with pokedex -> pokemon []
//  - fetch pokemon [] to get icons -> pokemon buttons
//  - on push button, carry out pokemon select routine
