import { PokemonType } from "./pokemonApiSlice"
import Str from "@/utilities/Str"
import Typography from "@mui/material/Typography"
import { Autocomplete, Avatar, Box, Stack, TextField } from "@mui/material"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { clearType, fetchType, selectType, setType } from "./pokemonTypeSlice"
import { selectPokeFilterId } from "./pokeFilterIdSlice"
import { getPokeFilter, selectPokedex } from "./pokedexSlice"
import { MapRegion } from "@/RegionSelect"
import { GameVersion } from "@/VersionSelect"
import { MapMarkerState, selectMapMarker } from "@/features/map/mapSlice"
import { Pokemon } from "@/data/dataTypes"

export interface PokedexProps {
  options: String[]
  onChange: (event: any, newValue: String | null) => void
  mapRegion: MapRegion
  gameVersion: GameVersion
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
      key={`${props.mapRegion}-${props.gameVersion}`}
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
  //  - [user clicks on a map pin]
  //  - iterate though pokeFilter ids to find ones in that grid  -> other nat. ids
  //  - fetch info for the other nat. ids
  //  - display all in a list, highlight common types with target

  const selectedPokeFilterId = useAppSelector(selectPokeFilterId)
  const pokeFilter = useAppSelector(selectPokedex)
  const pokemon = pokeFilter[selectedPokeFilterId]

  const mapMarkerInfo = useAppSelector(selectMapMarker)

  if (pokemon) {
    const pokemonName = new Str(pokemon.name).toTitleCase()

    return (
      <Box>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
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
        ) : null}
      </Box>
    )
  }

  return null
}

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
    ? `Other pokémon that will spawn at tile ${props.mapMarkerInfo.tableId}:`
    : `There are no other pokémon that will spawn at tile ${props.mapMarkerInfo.tableId}!`

  return (
    <Stack>
      <Typography variant="h6">{title}</Typography>
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
