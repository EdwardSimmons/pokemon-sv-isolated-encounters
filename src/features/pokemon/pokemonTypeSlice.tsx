import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { PokemonType } from "./pokemonApiSlice"

export interface PokemonTypeState {
  value: PokemonType | null
}

const initialState: PokemonTypeState = {
  value: null,
}

export const pokemonTypeSlice = createSlice({
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
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectType: pokemonType => pokemonType.value,
  },
})

// Action creators are generated for each case reducer function.
export const { setType, clearType } = pokemonTypeSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectType } = pokemonTypeSlice.selectors
