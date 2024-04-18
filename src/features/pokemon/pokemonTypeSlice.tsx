import { type PayloadAction } from "@reduxjs/toolkit"
import { PokemonType } from "./pokemonApiSlice"
import { createAppSlice } from "@/app/createAppSlice"

export interface PokemonTypeState {
  typeFilter: PokemonType | null
}

const initialState: PokemonTypeState = {
  typeFilter: null,
}

export const pokemonTypeSlice = createAppSlice({
  name: "pokemonType",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    setTypeFilter: create.reducer(
      (state, action: PayloadAction<PokemonType>) => {
        state.typeFilter = action.payload
      }
    ),
    clearTypeFilter: create.reducer(state => {
      state.typeFilter = null
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectTypeFilter: state => state.typeFilter,
  },
})

// Action creators are generated for each case reducer function.
export const { setTypeFilter, clearTypeFilter } = pokemonTypeSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectTypeFilter } = pokemonTypeSlice.selectors
