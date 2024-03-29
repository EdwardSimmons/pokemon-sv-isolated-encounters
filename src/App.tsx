import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import ProTip from "./ProTip"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import Divider from "@mui/material/Divider"
import { useEffect, useState } from "react"
import Map from "./Map"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query"

const queryClient = new QueryClient()

const BASE_URL = "https://jsonplaceholder.typicode.com"

interface Post {
  id: number
  title: string
}

function Demo() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: (): Promise<Post[]> =>
      fetch(`${BASE_URL}/postsss`).then(res => res.json()),
  })

  if (isLoading) {
    return <Typography variant="h6">Loading...</Typography>
  }
  if (error) {
    return (
      <Typography variant="h6">An error occured: {error.message}</Typography>
    )
  }

  return data ? (
    <>
      {data.map((post, i) => (
        <Box key={i} mb={2}>
          <Typography variant="h6">{post.title}</Typography>
        </Box>
      ))}
    </>
  ) : (
    <Typography variant="h6">The posts array is undefined.</Typography>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <Container maxWidth="sm">
    //     <Box sx={{ my: 4 }}>
    //       <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
    //         Practice
    //       </Typography>
    //       {/* <Quotes /> */}
    //       <Demo />
    //       <Copyright />
    //     </Box>
    //   </Container>
    // </QueryClientProvider>
    <Container maxWidth="sm">
      <Map />
    </Container>
  )
}
