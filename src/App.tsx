import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material"
import { useEffect, useState } from "react"
import Map, { MapRegion } from "./Map"
import { Pokedex, PokemonInfo, TypeSelect } from "./features/pokemon/Pokemon"
import { PokedexName } from "./features/pokemon/pokemonApiSlice"
import Str from "./utilities/Str"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import {
  selectType,
  selectPokemonOfType,
} from "./features/pokemon/pokemonTypeSlice"
import {
  clearName,
  selectPokemonName,
} from "./features/pokemon/pokemonNameSlice"
import { Loader } from "./Loader"

enum GameVersion {
  SCARLET = "Scarlet",
  VIOLET = "Violet",
}

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
      <Container maxWidth="sm" sx={{ py: 2 }}>
        <FormControl fullWidth>
          <FormLabel id="version-select">Select a Game Version</FormLabel>
          <RadioGroup
            row
            aria-labelledby="version-select"
            name="version-select-radio-buttons-group"
            value={gameVersion}
            onChange={handleGameVersionChange}
          >
            <FormControlLabel
              value={GameVersion.SCARLET}
              control={<Radio />}
              label={GameVersion.SCARLET}
            />
            <FormControlLabel
              value={GameVersion.VIOLET}
              control={<Radio />}
              label={GameVersion.VIOLET}
            />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth>
          <FormLabel id="region-select">Select a Region</FormLabel>
          <RadioGroup
            row
            aria-labelledby="region-select"
            name="region-select-radio-buttons-group"
            value={mapRegion}
            onChange={handleMapRegionChange}
          >
            {Object.values(MapRegion).map(region => (
              <FormControlLabel
                value={region}
                control={<Radio />}
                label={new Str(region).toTitleCase()}
                key={region}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {/* <Typography variant="body1">{selectedType}</Typography>
        <Typography variant="body1">
        {JSON.stringify(pokemonOfSelectedType)}
      </Typography> */}
        <Map region={mapRegion} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ alignItems: "center" }}
        >
          <Pokedex name={pokedexName} />
          <Typography variant="body1" sx={{ mx: { xs: 0, sm: 2 } }}>
            or
          </Typography>
          <TypeSelect />
        </Stack>
        <PokemonInfo name={selectedPokemon} />
      </Container>
    </>
  )
}
