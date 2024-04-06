import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface PokemonNameState {
  name: string
}

const initialState: PokemonNameState = {
  name: "",
}

export const pokemonNameSlice = createSlice({
  name: "pokemonName",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    setName: create.reducer((state, action: PayloadAction<string>) => {
      state.name = action.payload
    }),
    clearName: create.reducer(state => {
      state.name = ""
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectPokemonName: pokemonName => pokemonName.name,
  },
})

// Action creators are generated for each case reducer function.
export const { setName, clearName } = pokemonNameSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectPokemonName } = pokemonNameSlice.selectors
