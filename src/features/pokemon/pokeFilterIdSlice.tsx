import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface PokeFilterIdState {
  id: number
}

const initialState: PokeFilterIdState = {
  id: 0,
}

export const pokeFilterIdSlice = createSlice({
  name: "pokeFilterId",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    setPokeFilterId: create.reducer((state, action: PayloadAction<number>) => {
      state.id = action.payload
    }),
    clearPokeFilterId: create.reducer(state => {
      state.id = 0
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectPokeFilterId: state => state.id,
  },
})

// Action creators are generated for each case reducer function.
export const { setPokeFilterId, clearPokeFilterId } = pokeFilterIdSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectPokeFilterId } = pokeFilterIdSlice.selectors
