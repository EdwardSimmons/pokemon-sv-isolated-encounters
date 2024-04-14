import { PokemonType } from "./pokemonApiSlice"
import Str from "@/utilities/Str"
import Typography from "@mui/material/Typography"
import { Autocomplete, Avatar, Stack, TextField } from "@mui/material"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { clearType, fetchType, selectType, setType } from "./pokemonTypeSlice"
import { selectPokeFilterId } from "./pokeFilterIdSlice"
import { getPokeFilter, selectPokedex } from "./pokedexSlice"
import { MapRegion } from "@/RegionSelect"

export interface PokedexProps {
  options: String[]
  onChange: (event: any, newValue: String | null) => void
  mapRegion: MapRegion
}

export const Pokedex = (props: PokedexProps) => {
  const selectedType = useAppSelector(selectType)

  return (
    <Autocomplete
      disablePortal
      fullWidth
      id="pokemon-select-autocomplete"
      options={props.options}
      sx={{ my: 2 }}
      renderInput={params => (
        <TextField {...params} label="Choose a Pokémon..." />
      )}
      onChange={props.onChange}
      disabled={!!selectedType}
      key={props.mapRegion}
    />
  )
}

export const TypeSelect = () => {
  const dispatch = useAppDispatch()
  const selectedPokemon = useAppSelector(selectPokeFilterId)

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

export const PokemonInfo = () => {
  // Using a query hook automatically fetches data and returns query values

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

  const selectedPokeFilterId = useAppSelector(selectPokeFilterId)
  const pokeFilter = useAppSelector(selectPokedex)

  const pokemon = pokeFilter[selectedPokeFilterId]

  if (pokemon) {
    const pokemonName = new Str(pokemon.name).toTitleCase()

    return (
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography variant="h4">{pokemonName}</Typography>
        <Avatar src={pokemon.shinySprite} sx={{ height: 64, width: 64 }} />
        <Typography variant="h4">{selectedPokeFilterId}</Typography>
      </Stack>
    )
  }

  return null
}

function getGridIds(
  pokemonId: number,
  mapRegion: MapRegion
): number[] | undefined {
  const filterId = pokemonId * 10
  return getPokeFilter(mapRegion)[filterId]?.tableIDs || undefined
}

interface SpawnRate {
  gridId: number
  spawnRate: number
}

function getSpawnRates(pokemonId: number, mapRegion: MapRegion): SpawnRate[] {
  const gridIds = getGridIds(pokemonId, mapRegion)

  if (!gridIds) {
    // I.e. the pokemon does not spawn on the map.
    return []
  }

  const pokeFilter = useAppSelector(selectPokedex)
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

// async function fetchPokemonInfo(filterId: number): Promise<PokeAPI.Pokemon> {
//   const id = filterId / 10
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//   return (await response.json()) as PokeAPI.Pokemon
// }

// async function megaFetch(pokedexName: PokedexName): Promise<void> {
//   const pokeFilter = getPokeFilter(pokedexName)
//   const pokemonIds = Object.keys(pokeFilter).map(id => parseInt(id))

//   const appendedPokeFilter: PokeFilterPlus = {}

//   for (let i = 0; i < pokemonIds.length; i++) {
//     // Only fetch for non-variant ids (i.e. ones that end in a zero)
//     if (pokemonIds[i] % 10 === 0) {
//       const filterId = pokemonIds[i]
//       console.log("fetch for filterId: ", filterId)
//       const info = await fetchPokemonInfo(filterId)
//       appendedPokeFilter[filterId] = {
//         tableIDs: pokeFilter[filterId].tableIDs,
//         name: info.name,
//         types: formatTypeResponse(info.types),
//         shinySprite: info.sprites.front_shiny,
//       }
//     }
//   }

//   const exportHelper = new Export(appendedPokeFilter)
//   exportHelper.asTxt()
// }

// interface PokeFilterPlus {
//   [n: number]: {
//     tableIDs: number[] // Map grid table IDs where that Pokémon spawns.
//     name: string
//     types: PokemonType[]
//     shinySprite: string
//   }
// }

// function formatTypeResponse(types: PokeAPI.PokemonType[]): PokemonType[] {
//   return types.map(typeResponse => {
//     const type = Object.values(PokemonType).find(
//       type => type === typeResponse.type.name
//     )
//     return type || PokemonType.NORMAL
//   })
// }
