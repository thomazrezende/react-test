import React from 'react'; 
import styled from "styled-components"; 
import Card from './Card' 
import { technologies as data } from "./api-mock";  

////////// card body

const CardsList = (d) => (
  <CardsListUl>
    {data.map((d, i) => (
      <Card
        key={d.id}   
        mainLabel={d.name} 
        secondaryLabel="TREND TITLE" 
        image={d.image}
        summary={d.summary}
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