import React from 'react'
import Cards from './Cards'  
import {themeEV, themeGIZ} from './theme'
import {ThemeProvider} from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={themeGIZ}>
      <Cards></Cards>
    </ThemeProvider>
  )
}

export default App
