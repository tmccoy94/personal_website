import { Grid, GridItem } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import ProfilePic from './components/ProfilePic'

function App() {

  return (
    <>
      <div>
      <Grid
      templateAreas={{
        base: `"header header" "summary info"` /* For the cell phone one column */,
      }}
      templateColumns={{
        base: "1fr 1fr"
      }}
      >
        <GridItem area="header"><ProfilePic /></GridItem>
        <GridItem area="summary" background="red">Hello</GridItem>
        <GridItem area="info" background="blue">hi</GridItem>
        
      </Grid>
      </div>
    </>
  )
}

export default App
