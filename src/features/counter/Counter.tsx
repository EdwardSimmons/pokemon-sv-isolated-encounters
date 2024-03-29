import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "./counterSlice"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <>
      <Box>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          variant="outlined"
        >
          -
        </Button>
        <Typography variant="button" mx={2} aria-label="Count">
          {count}
        </Typography>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          variant="outlined"
        >
          +
        </Button>
      </Box>
      <Stack direction="row" sx={{ my: 4 }}>
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={incrementAmount}
          onChange={e => {
            setIncrementAmount(e.target.value)
          }}
        />

        <Button
          sx={{ ml: 2 }}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </Button>
        <Button
          sx={{ mx: 2 }}
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>
        <Button
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue))
          }}
        >
          Add If Odd
        </Button>
      </Stack>
    </>
  )
}
