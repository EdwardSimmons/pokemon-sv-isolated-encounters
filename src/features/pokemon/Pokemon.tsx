import {
  PokedexName,
  PokemonId,
  PokemonType,
  useGetPokedexQuery,
  useGetPokemonQuery,
} from "./pokemonApiSlice"
import Str from "@/utilities/Str"
import Typography from "@mui/material/Typography"
import { Autocomplete, Avatar, Stack, TextField } from "@mui/material"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { clearType, fetchType, selectType, setType } from "./pokemonTypeSlice"
import { clearName, selectPokemonName, setName } from "./pokemonNameSlice"
import { paldeaCatchable } from "@/data/paldea"
import { kitikamiCatchable } from "@/data/kitakami"
import { terariumCatchable } from "@/data/terarium"

export interface PokedexProps {
  name: PokedexName
}

function pokedexFilter(name: PokedexName) {
  switch (name) {
    case PokedexName.PALDEA:
      return paldeaCatchable
    case PokedexName.KITIKAMI:
      return kitikamiCatchable
    case PokedexName.BLUEBERRY:
      return terariumCatchable
  }
}

export const Pokedex = (props: PokedexProps) => {
  const dispatch = useAppDispatch()
  const selectedType = useAppSelector(selectType)
  const handleOnChangePokemon = (event: any, newValue: string | null) => {
    // Update state
    if (newValue) {
      const pokemonName = newValue.split(" - ")[1].toLowerCase()
      dispatch(setName(pokemonName))
    } else {
      dispatch(clearName())
    }
  }
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
        options={data.pokemon_entries
          .filter(pokedexFilter(props.name))
          .map(
            entry =>
              `${entry.entry_number} - ${new Str(
                entry.pokemon_species.name
              ).toTitleCase()}`
          )}
        sx={{ my: 2 }}
        renderInput={params => (
          <TextField {...params} label="Choose a Pokémon..." />
        )}
        onChange={handleOnChangePokemon}
        disabled={!!selectedType}
      />
    )
  }

  return null
}

export const TypeSelect = () => {
  const dispatch = useAppDispatch()
  const selectedPokemon = useAppSelector(selectPokemonName)

  const handleOnChangeType = (event: any, newValue: string | null) => {
    // Update state
    if (newValue) {
      const type = newValue.toLowerCase() as PokemonType
      dispatch(setType(type))
      dispatch(fetchType(type))
    } else {
      dispatch(clearType())
    }
  }

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
      onChange={handleOnChangeType}
      disabled={!!selectedPokemon}
    />
  )
}

export interface PokemonInfoProps {
  name: PokemonId
}

export const PokemonInfo = (props: PokemonInfoProps) => {
  // Using a query hook automatically fetches data and returns query values

  const { data, isError, isLoading, isSuccess } = useGetPokemonQuery(props.name)

  if (isSuccess && data?.name) {
    const pokemonName = new Str(data.name).toTitleCase()
    return (
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography variant="h4">{pokemonName}</Typography>
        <Avatar src={data.sprites.front_shiny} sx={{ height: 64, width: 64 }} />
      </Stack>
    )
  }

  return null
}
