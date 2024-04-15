import { Pokemon } from "@/data/dataTypes"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface MapMarkerState {
  tableId: number
  allPokemon: Pokemon[]
}

const initialState: MapMarkerState = {
  tableId: 0,
  allPokemon: [],
}

export const mapMarkerSlice = createSlice({
  name: "mapMarker",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    setMapMarker: create.reducer(
      (state, action: PayloadAction<MapMarkerState>) => {
        state.tableId = action.payload.tableId
        state.allPokemon = [...action.payload.allPokemon]
      }
    ),
    clearMapMarker: create.reducer(state => {
      ;(state.tableId = 0), (state.allPokemon = [])
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectMapMarker: state => state,
  },
})

// Action creators are generated for each case reducer function.
export const { setMapMarker, clearMapMarker } = mapMarkerSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectMapMarker } = mapMarkerSlice.selectors
