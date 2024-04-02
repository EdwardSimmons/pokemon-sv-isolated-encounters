import { PokedexName, PokemonType, useGetPokedexQuery } from "./pokemonApiSlice"
import Str from "@/utilities/Str"
import Typography from "@mui/material/Typography"
import { Autocomplete, TextField } from "@mui/material"

export interface PokedexProps {
  name: PokedexName
}

export const Pokedex = (props: PokedexProps) => {
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useGetPokedexQuery(props.name)

  if (isError) {
    return <Typography variant="h5">There was an error!!!</Typography>
  }

  if (isLoading) {
    return <Typography variant="h5">Loading...</Typography>
  }

  if (isSuccess) {
    return (
      <Autocomplete
        disablePortal
        fullWidth
        id="pokemon-select-autocomplete"
        options={data.pokemon_entries.map(
          entry =>
            `${entry.entry_number} - ${new Str(
              entry.pokemon_species.name
            ).toTitleCase()}`
        )}
        sx={{ my: 2 }}
        renderInput={params => (
          <TextField {...params} label="Choose a Pokémon..." />
        )}
      />
    )
  }

  return null
}

export const TypeSelect = () => {
  return (
    <Autocomplete
      disablePortal
      fullWidth
      id="type-select-autocomplete"
      options={Object.values(PokemonType).map(
        type => `${new Str(type).toTitleCase()}`
      )}
      sx={{ my: 2 }}
      renderInput={params => <TextField {...params} label="Select a type..." />}
    />
  )
}
