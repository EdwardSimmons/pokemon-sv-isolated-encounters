import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material"
import { useEffect, useState } from "react"
import Map, { MapRegion } from "./Map"
import { Pokedex, TypeSelect } from "./features/pokemon/Pokemon"
import { PokedexName } from "./features/pokemon/pokemonApiSlice"
import Str from "./utilities/Str"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default function App() {
  const [mapRegion, setMapRegion] = useState<MapRegion>(MapRegion.PALDEA)
  const [pokedexName, setPokedexName] = useState<PokedexName>(
    PokedexName.PALDEA
  )

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
  }
  return (
    <Container maxWidth="sm">
      <FormControl>
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
            />
          ))}
        </RadioGroup>
      </FormControl>
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
      <Map region={mapRegion} />
    </Container>
  )
}
