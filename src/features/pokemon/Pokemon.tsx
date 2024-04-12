import {
  PokedexName,
  PokemonId,
  PokemonType,
  useGetPokedexQuery,
  useGetPokemonQuery,
} from "./pokemonApiSlice"
import Str from "@/utilities/Str"
import Typography from "@mui/material/Typography"
import { Autocomplete, Avatar, Button, Stack, TextField } from "@mui/material"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { clearType, fetchType, selectType, setType } from "./pokemonTypeSlice"
import { clearName, selectPokemonName, setName } from "./pokemonNameSlice"
import { paldeaCatchable, paldeaPokeFilter } from "@/data/paldea"
import { kitikamiCatchable, kitakamiPokeFilter } from "@/data/kitakami"
import { terariumCatchable, terariumPokeFilter } from "@/data/terarium"
import { PokeAPI } from "pokeapi-types"
import { PokeFilter } from "@/data/dataTypes"
import Export from "@/utilities/Export"

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
  pokedexName: PokedexName
}

export const PokemonInfo = (props: PokemonInfoProps) => {
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useGetPokemonQuery(props.name)
  // Pokemon select
  //  - fetch info                                          -> nat. id #
  //  - use nat. id to search the pokeFilter array          -> gridId []
  //  - iterate through each gridId, find others that spawn
  //    - for each grid id, fetch all other pokemon to find which share a type with target
  //    -> % spawn of target by type
  //  - display pins on map, color set by % value

  //  - [user clicks on a map pin]
  //  - iterate though pokeFilter ids to find ones in that grid  -> other nat. ids
  //  - fetch info for the other nat. ids
  //  - display all in a list, highlight common types with target

  if (isSuccess && data?.name) {
    const pokemonName = new Str(data.name).toTitleCase()
    console.log(getSpawnRates(data.id, props.pokedexName))

    return (
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography variant="h4">{pokemonName}</Typography>
        <Avatar src={data.sprites.front_shiny} sx={{ height: 64, width: 64 }} />
        <Button onClick={() => megaFetch(props.pokedexName)}>Mega Fetch</Button>
      </Stack>
    )
  }

  return null
}

function getPokeFilter(name: PokedexName): PokeFilter {
  switch (name) {
    case PokedexName.PALDEA:
      return paldeaPokeFilter
    case PokedexName.KITIKAMI:
      return kitakamiPokeFilter
    case PokedexName.BLUEBERRY:
      return terariumPokeFilter
  }
}

function getGridIds(
  pokemonId: number,
  pokedexName: PokedexName
): number[] | undefined {
  const filterId = pokemonId * 10
  return getPokeFilter(pokedexName)[filterId]?.tableIDs || undefined
}

interface SpawnRate {
  gridId: number
  spawnRate: number
}

function getSpawnRates(
  pokemonId: number,
  pokedexName: PokedexName
): SpawnRate[] {
  const gridIds = getGridIds(pokemonId, pokedexName)

  if (!gridIds) {
    // I.e. the pokemon does not spawn on the map.
    return []
  }

  const pokeFilter = getPokeFilter(pokedexName)
  const pokemonIds = Object.keys(pokeFilter).map(id => parseInt(id))

  return gridIds.map(gridId => {
    let otherPokemonIds: number[] = []
    pokemonIds.forEach(pokemonId => {
      if (pokeFilter[pokemonId]?.tableIDs.some(id => id === gridId)) {
        otherPokemonIds.push(pokemonId)
      }
    })
    console.log(otherPokemonIds)

    return {
      gridId,
      spawnRate: (1 / otherPokemonIds.length) * 100,
      // is only giving the total spawn rate, not filtered by type
    }
  })
}

/**
 * Find the other pokemon that also spawn
 * @param tableId The pokeFilter table id to search with.
 * @returns An array of national dex ids.
 */
function getOtherPokemonIds(tableId: number): number[] {
  return []
}

function fetchOtherPokemonInfo(): Promise<PokeAPI.Pokemon[]> {
  return new Promise((res, rej) => [])
}

async function fetchPokemonInfo(filterId: number): Promise<PokeAPI.Pokemon> {
  const id = filterId / 10
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return (await response.json()) as PokeAPI.Pokemon
}

async function megaFetch(pokedexName: PokedexName): Promise<void> {
  const pokeFilter = getPokeFilter(pokedexName)
  const pokemonIds = Object.keys(pokeFilter).map(id => parseInt(id))

  const appendedPokeFilter: PokeFilterPlus = {}

  for (let i = 0; i < pokemonIds.length; i++) {
    // Only fetch for non-variant ids (i.e. ones that end in a zero)
    if (pokemonIds[i] % 10 === 0) {
      const filterId = pokemonIds[i]
      console.log("fetch for filterId: ", filterId)
      const info = await fetchPokemonInfo(filterId)
      appendedPokeFilter[filterId] = {
        tableIDs: pokeFilter[filterId].tableIDs,
        name: info.name,
        types: formatTypeResponse(info.types),
        shinySprite: info.sprites.front_shiny,
      }
    }
  }

  const exportHelper = new Export(appendedPokeFilter)
  exportHelper.asTxt()
}

interface PokeFilterPlus {
  [n: number]: {
    tableIDs: number[] // Map grid table IDs where that Pokémon spawns.
    name: string
    types: PokemonType[]
    shinySprite: string
  }
}

function formatTypeResponse(types: PokeAPI.PokemonType[]): PokemonType[] {
  return types.map(typeResponse => {
    const type = Object.values(PokemonType).find(
      type => type === typeResponse.type.name
    )
    return type || PokemonType.NORMAL
  })
}
