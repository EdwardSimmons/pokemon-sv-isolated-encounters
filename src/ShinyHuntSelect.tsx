import { Stack, Typography } from "@mui/material"
import { Pokedex, TypeSelect } from "./features/pokemon/Pokemon"
import { PokedexName } from "./features/pokemon/pokemonApiSlice"

export interface ShinyHuntSelectProps {
  pokedexName: PokedexName
}

export default function ShinyHuntSelect(props: ShinyHuntSelectProps) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ alignItems: "center" }}
    >
      <Pokedex name={props.pokedexName} />
      <Typography variant="body1" sx={{ mx: { xs: 0, sm: 2 } }}>
        or
      </Typography>
      <TypeSelect />
    </Stack>
  )
}
