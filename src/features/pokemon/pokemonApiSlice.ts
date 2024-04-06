// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { PokeAPI } from "pokeapi-types"

export enum PokedexName {
  PALDEA = "paldea",
  KITIKAMI = "kitakami",
  BLUEBERRY = "blueberry",
}

export type PokemonId = string | number // E.g. 1 or "bulbasaur"

export enum PokemonType {
  NORMAL = "normal",
  FIGHTING = "fighting",
  FLYING = "flying",
  POISON = "poison",
  GROUND = "ground",
  ROCK = "rock",
  BUG = "bug",
  GHOST = "ghost",
  STEEL = "steel",
  FIRE = "fire",
  WATER = "water",
  GRASS = "grass",
  ELECTRIC = "electric",
  PSYCHIC = "psychic",
  ICE = "ice",
  DRAGON = "dragon",
  DARK = "dark",
  FAIRY = "fairy",
}

// Define a service using a base URL and expected endpoints
export const pokemonApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  reducerPath: "pokemonApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Pokedex", "Pokemon", "Type"],
  endpoints: build => ({
    getPokedex: build.query<PokeAPI.Pokedex, PokedexName>({
      query: (dex: PokedexName = PokedexName.PALDEA) => `pokedex/${dex}`,
      providesTags: (result, error, id) => [{ type: "Pokedex", id }],
    }),
    getPokemon: build.query<PokeAPI.Pokemon, PokemonId>({
      query: (id: PokemonId = 1) => `pokemon/${id}`,
      providesTags: (result, error, id) => [{ type: "Pokemon", id }],
    }),
    getType: build.query<PokeAPI.Type, PokemonType>({
      query: (type: PokemonType = PokemonType.NORMAL) => `type/${type}`,
      providesTags: (result, error, id) => [{ type: "Type", id }],
    }),
  }),
})

export const useGetPokemonState =
  pokemonApiSlice.endpoints.getPokemon.useQueryState
export const { useGetPokedexQuery, useGetPokemonQuery, useGetTypeQuery } =
  pokemonApiSlice
