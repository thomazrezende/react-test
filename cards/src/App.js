import React from 'react'; 
import Card from './Card'  
import { technologies as data } from "./api-mock";  

function App() {
  return ( 
    <ul>
      {data.map((d, i) => (
        <Card
          key={d.id}   
          mainLabel={d.name} 
          secondaryLabel="TREND TITLE" 
          image={d.image}
          summary={d.summary}
        />
      ))}
    </ul>   
  );
}

export default App;
