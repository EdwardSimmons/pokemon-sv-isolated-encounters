import { Stack } from "@mui/material"
import { Pokedex, TypeSelect } from "./features/pokemon/Pokemon"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { selectPokedex } from "./features/pokemon/pokedexSlice"
import {
  clearPokeFilterId,
  selectPokeFilterId,
  setPokeFilterId,
} from "./features/pokemon/pokeFilterIdSlice"
import Str from "./utilities/Str"
import { clearMapMarker } from "./features/map/mapSlice"
import { selectTypeFilter } from "./features/pokemon/pokemonTypeSlice"
import { useEffect, useState } from "react"
import { PokemonType } from "./features/pokemon/pokemonApiSlice"
import { PokeFilter } from "./data/dataTypes"

function filterPokedexOptions(
  typeFilter: PokemonType | null,
  pokedex: PokeFilter
): string[] {
  const dexEntries = Object.keys(pokedex).map(natId => {
    const id = parseInt(natId)
    return {
      id,
      types: pokedex[id].types,
      name: `${Math.round(id / 10)} - ${new Str(
        pokedex[id].name
      ).toTitleCase()}`,
    }
  })

  return typeFilter
    ? dexEntries
        .filter(entry => entry.types.includes(typeFilter))
        .map(entry => entry.name)
    : dexEntries.map(entry => entry.name)
}

export default function ShinyHuntSelect() {
  const selectedPokemon = useAppSelector(selectPokeFilterId)
  const selectedPokedex = useAppSelector(selectPokedex)
  const selectedTypeFilter = useAppSelector(selectTypeFilter)

  const [filterIds, setFilterIds] = useState<number[]>(
    Object.keys(selectedPokedex).map(id => parseInt(id))
  )
  const [pokedexOptions, setPokedexOptions] = useState(
    filterPokedexOptions(selectedTypeFilter, selectedPokedex)
  )
  const [isPokedexDisabled, setIsPokedexDisabled] = useState(false)

  useEffect(() => {
    const newFilterIds = Object.keys(selectedPokedex).map(id => parseInt(id))
    setFilterIds(newFilterIds)
    setPokedexOptions(filterPokedexOptions(selectedTypeFilter, selectedPokedex))
    if (selectedPokemon) {
      setIsPokedexDisabled(
        newFilterIds.includes(selectedPokemon) ? false : true
      )
    }
  }, [selectedTypeFilter, selectedPokedex])

  const dispatch = useAppDispatch()
  const handleOnChangePokemon = (event: any, newValue: String | null) => {
    if (newValue) {
      const pokemonName = newValue.split(" - ")[1].toLowerCase()
      const filterIdIndex = Object.keys(selectedPokedex).findIndex(
        filterKey => selectedPokedex[parseInt(filterKey)].name === pokemonName
      )
      dispatch(setPokeFilterId(filterIds[filterIdIndex]))
      dispatch(clearMapMarker())
    } else {
      dispatch(clearPokeFilterId())
      dispatch(clearMapMarker())
    }
  }

  return (
    <Stack>
      <TypeSelect />
      <Pokedex
        options={pokedexOptions}
        onChange={handleOnChangePokemon}
        isDisabled={isPokedexDisabled}
      />
    </Stack>
  )
}
