import React from "react";
import { technologies as data } from "./api-mock";
import styled from "styled-components";

const CardItem = props => (
  <CardItemCss trl={props.trl}>
    {props.number} -{" "}
    <LabelItalicCss>
      {" "}
      ({props.trl}) {props.label}
    </LabelItalicCss>
  </CardItemCss>
);

const CardItemCss = styled.li`
  background-color: ${props =>
    props.trl < 4 ? props.theme.color1 : props.theme.color2};
  color: #fff;
  :hover {
    background-color: red;
  }
`;

const LabelCss = styled.span`
  background-color: red;
`;

// extend LabelCss
const LabelItalicCss = styled(LabelCss)`
  font-style: italic;
`;

const CardsList = () => (
  <ul>
    {data.map((d, i) => (
      <CardItem key={d.id} trl={d.trl} number={i + 1} label={d.name} />
    ))}
  </ul>
);

const Cards = () => <CardsList />;

export default Cards;
