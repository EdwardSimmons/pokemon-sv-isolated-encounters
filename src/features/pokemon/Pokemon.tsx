import { useState } from "react"
import { PokedexName, useGetPokedexQuery } from "./pokemonApiSlice"
import Str from "@/utilities/Str"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"

export const Pokedex = () => {
  const [pokedex, setPokedex] = useState(PokedexName.PALDEA)
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useGetPokedexQuery(pokedex)

  if (isError) {
    return <Typography variant="h5">There was an error!!!</Typography>
  }

  if (isLoading) {
    return <Typography variant="h5">Loading...</Typography>
  }

  if (isSuccess) {
    return (
      <>
        <Typography variant="h5">Select which Pokédex to view:</Typography>

        <FormControl
          fullWidth
          sx={{
            my: 4,
          }}
        >
          <InputLabel id="select-pokedex-label">Pokédex</InputLabel>
          <Select
            labelId="select-pokedex-label"
            id="select-pokedex"
            value={pokedex}
            label="Select a pokedex"
            onChange={e => {
              setPokedex(e.target.value as PokedexName)
            }}
          >
            {Object.values(PokedexName).map(pokedex => (
              <MenuItem key={pokedex} value={pokedex}>
                {new Str(pokedex).toTitleCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {data.pokemon_entries.map(entry => (
          <Box key={entry.entry_number} mb={2}>
            <Typography variant="body1">
              {new Str(entry.pokemon_species.name).toTitleCase()}
            </Typography>
          </Box>
        ))}
      </>
    )
  }

  return null
}
