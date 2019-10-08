import React from 'react'; 
import {ThemeProvider} from 'styled-components';

import CardsList from './components/CardsList'; 
import {themeEV} from './components/Theme'

function App() {
  return ( 
    <ThemeProvider theme={themeEV}>
      <CardsList/>
    </ThemeProvider>
  );
}

export default App;
