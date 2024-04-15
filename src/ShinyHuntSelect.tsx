import { Stack, Typography } from "@mui/material"
import { Pokedex, TypeSelect } from "./features/pokemon/Pokemon"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import {
  selectMapRegion,
  selectPokedex,
  selectVersion,
} from "./features/pokemon/pokedexSlice"
import {
  clearPokeFilterId,
  setPokeFilterId,
} from "./features/pokemon/pokeFilterIdSlice"
import Str from "./utilities/Str"
import { clearMapMarker } from "./features/map/mapSlice"

export default function ShinyHuntSelect() {
  const selectedMapRegion = useAppSelector(selectMapRegion)
  const selectedPokedex = useAppSelector(selectPokedex)
  const selectedVersion = useAppSelector(selectVersion)
  const filterIds = Object.keys(selectedPokedex).map(id => parseInt(id))

  const pokedexOptions = filterIds.map(
    filterId =>
      `${Math.round(filterId / 10)} - ${new Str(
        selectedPokedex[filterId].name
      ).toTitleCase()}`
  )

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
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ alignItems: "center" }}
    >
      <Pokedex
        options={pokedexOptions}
        onChange={handleOnChangePokemon}
        mapRegion={selectedMapRegion}
        gameVersion={selectedVersion}
      />
      {/* <Typography variant="body1" sx={{ mx: { xs: 0, sm: 2 } }}>
        or
      </Typography>
      <TypeSelect /> */}
    </Stack>
  )
}
