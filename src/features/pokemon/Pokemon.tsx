import { PokemonType } from "./pokemonApiSlice"
import Str from "@/utilities/Str"
import Typography from "@mui/material/Typography"
import { Autocomplete, Avatar, Box, Stack, TextField } from "@mui/material"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { clearTypeFilter, setTypeFilter } from "./pokemonTypeSlice"
import { selectPokeFilterId } from "./pokeFilterIdSlice"
import { selectPokedex } from "./pokedexSlice"
import { MapMarkerState, selectMapMarker } from "@/features/map/mapSlice"
import { Pokemon } from "@/data/dataTypes"
import { forwardRef } from "react"

export interface PokedexProps {
  options: String[]
  onChange: (event: any, newValue: String | null) => void
  isDisabled: boolean
}

export const Pokedex = (props: PokedexProps) => {
  return (
    <Autocomplete
      disablePortal
      fullWidth
      blurOnSelect
      id="pokemon-select-autocomplete"
      options={props.options}
      sx={{ mb: { xs: 2, md: 0 }, mt: 2 }}
      renderInput={params => (
        <TextField {...params} label="Choose a Pokémon..." />
      )}
      onChange={props.onChange}
      disabled={props.isDisabled}
    />
  )
}

export const TypeSelect = () => {
  const selectedPokeFilterId = useAppSelector(selectPokeFilterId)
  const dispatch = useAppDispatch()

  const handleOnChangeType = (event: any, newValue: string | null) => {
    // Update state
    if (newValue) {
      const type = newValue.toLowerCase() as PokemonType
      dispatch(setTypeFilter(type))
    } else {
      dispatch(clearTypeFilter())
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
      sx={{ mt: 2 }}
      renderInput={params => (
        <TextField {...params} label="Filter by type (optional)" />
      )}
      onChange={handleOnChangeType}
      disabled={!!selectedPokeFilterId}
    />
  )
}

export const PokemonInfo = forwardRef(function PokemonInfo(props, ref) {
  const selectedPokeFilterId = useAppSelector(selectPokeFilterId)
  const pokeFilter = useAppSelector(selectPokedex)
  const pokemon = pokeFilter[selectedPokeFilterId]

  const mapMarkerInfo = useAppSelector(selectMapMarker)

  if (pokemon) {
    const pokemonName = new Str(pokemon.name).toTitleCase()

    return (
      <Box ref={ref}>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mt: { xs: 2, md: 0 },
          }}
        >
          <Typography variant="h4">{pokemonName}</Typography>
          <Stack direction="row" alignItems="center">
            {pokemon.types.map(t => {
              return (
                <img
                  width={32}
                  height={12}
                  src={`./types/${t}.gif`}
                  key={`${pokemonName}-${t}`}
                  style={{ margin: "0 0.25rem" }}
                />
              )
            })}
            <Avatar
              src={pokemon.shinySprite}
              sx={{ height: 64, width: 64, ml: 0.5 }}
            />
          </Stack>
        </Stack>
        {!!mapMarkerInfo?.tableId ? (
          <OtherPokemonInfo
            mapMarkerInfo={mapMarkerInfo}
            targetPokemon={pokemon}
          />
        ) : (
          <Typography>
            Select a map marker to view more information about that location.
          </Typography>
        )}
      </Box>
    )
  }

  return null
})

interface OtherPokemonInfoProps {
  mapMarkerInfo: MapMarkerState
  targetPokemon: Pokemon
}

function OtherPokemonInfo(props: OtherPokemonInfoProps) {
  const otherPokemon = props.mapMarkerInfo.allPokemon.filter(
    p => p.name !== props.targetPokemon.name
  )
  const otherPokemonUnique = otherPokemon.filter(
    (item, index) => otherPokemon.indexOf(item) === index
  )

  const title = otherPokemonUnique.length
    ? `Other pokémon that will spawn:`
    : `There are no other pokémon that will spawn at this tile!`

  return (
    <Stack>
      <Typography variant="h6">Tile {props.mapMarkerInfo.tableId}</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
        <Typography variant="body1">
          {`Spawn rate${props.targetPokemon.types.length > 1 ? "s" : ""}`}:
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {props.mapMarkerInfo.tooltip}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {title}
      </Typography>
      {otherPokemonUnique.map(otherPokemon => {
        const otherPokemonName = new Str(otherPokemon.name).toTitleCase()
        return (
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
            key={otherPokemon.name}
          >
            <Typography variant="body1">{otherPokemonName}</Typography>
            <Stack direction="row" alignItems="center">
              {otherPokemon.types.map(t => {
                return (
                  <img
                    width={32}
                    height={12}
                    src={`./types/${t}.gif`}
                    key={`${otherPokemonName}-${t}`}
                    style={{ margin: "0 0.25rem" }}
                  />
                )
              })}
              <Avatar
                src={otherPokemon.shinySprite}
                sx={{ height: 48, width: 48 }}
              />
            </Stack>
          </Stack>
        )
      })}
    </Stack>
  )
}
