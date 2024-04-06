import { type PayloadAction } from "@reduxjs/toolkit"
import { PokemonType } from "./pokemonApiSlice"
import { createAppSlice } from "@/app/createAppSlice"
import { PokeAPI } from "pokeapi-types"

export interface PokemonTypeState {
  value: PokemonType | null
  pokemon: PokeAPI.TypePokemon[]
  status: "idle" | "loading" | "failed"
}

const initialState: PokemonTypeState = {
  value: null,
  pokemon: [],
  status: "idle",
}

export const pokemonTypeSlice = createAppSlice({
  name: "pokemonType",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    setType: create.reducer((state, action: PayloadAction<PokemonType>) => {
      state.value = action.payload
    }),
    clearType: create.reducer(state => {
      state.value = null
      state.pokemon = []
    }),
    fetchType: create.asyncThunk(
      async (type: PokemonType) => {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        const data = (await response.json()) as PokeAPI.Type
        // The value we return becomes the `fulfilled` action payload
        return data
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.pokemon = action.payload.pokemon
        },
        rejected: state => {
          state.status = "failed"
        },
      }
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectType: state => state.value,
    selectPokemonOfType: state => state.pokemon,
  },
})

// Action creators are generated for each case reducer function.
export const { setType, clearType, fetchType } = pokemonTypeSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectType, selectPokemonOfType } = pokemonTypeSlice.selectors
