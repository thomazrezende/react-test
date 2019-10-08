import React from 'react'; 
import styled from "styled-components"; 

import Card from './Card' 
import { technologies as data } from "../data/api-mock";  

////////// list //////////

const CardsList = () => (
  <CardsListUl>
    {data.map((tech, i) => (
      <Card 
        key={tech.id}   
        mainLabel={tech.name} 
        secondaryLabel="TREND TITLE" 
        image={tech.image}
        summary={tech.summary}
      />
    ))}
  </CardsListUl>   
)

const CardsListUl = styled.div` 
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:flex-start;  
  padding-top:20px;
  padding-left:20px;
  background:#262636;
`;  

////////// export //////////

export default CardsList;