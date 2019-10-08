import React from 'react'; 
import styled from "styled-components";


////////// header //////////

const CardHeader = (props) => (
  <CardHeaderDiv>
    <CardTitle 
      mainLabel={props.mainLabel} 
      secondaryLabel={props.secondaryLabel}>
    </CardTitle>
    <CardImageDiv image={props.image}></CardImageDiv> 
    <CardFogDiv/>  
  </CardHeaderDiv>
) 

const CardHeaderDiv = styled.div`
  position:absolute;
  width:100%;
  height:50%;
  top:0;
  left:0;  
`; 

////////// fog //////////
  
const CardFogDiv = styled.div`
  position:absolute;
  left:-50%;
  top:100%;
  width:200%;
  height:200%;
  box-shadow: 0 0 100px 135px #2E2E40; 
  z-index:1;  
	transition: all 0.2s ease-in-out;
`;

////////// text //////////    
 
const CardText = (props) => (
  <CardTextDiv>{props.text}</CardTextDiv>
)

const CardTextDiv = styled.div`
  position:absolute; 
  height:calc(50% - 30px);
  bottom:30px;
  left:0;
  padding:5px 20px 0 20px;
  color:#A4A4B3;
  font-family:'Nunito Sans';
  font-size:11px;
  font-weight:300;
  line-height:15px;
  box-sizing:border-box; 
  overflow:hidden; 
`


////////// image //////////

const CardImageDiv = styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-image:url(${d => `https://res.cloudinary.com/envisioning/image/upload/c_fill,dpr_1,h_155,w_250/v1/s3/images/${d.image}` });  
  background-position:center;
  background-size:cover;
  z-index:1;
`;


////////// title //////////

const CardTitle = (props) => ( 
  <CardTitleDiv>
    <SecondaryLabel text={props.secondaryLabel} />
    <MainLabel text={props.mainLabel} />
    <CardIcon color='#ff0' />
  </CardTitleDiv> 
)

const CardTitleDiv = styled.div`
  position:absolute;
  z-index:2;
  bottom:0;
  padding:20px 30px 5px 20px; 
  color:#fff;
  box-sizing:border-box; 
  width:100%;
`;


////////// icons //////////

const CardIcon = (props) => (
  <CardIconDiv>
    <IconPopup15 color={props.color} />
  </CardIconDiv>
)

const CardIconDiv = styled.div` 
  right:5px;
  bottom:5px;
  display: flex;
  align-items: center;
  justify-content: center; 
  position:absolute;
  width:25px;
  height:25px; 
`; 


// icon popup15

const IconPopup15 = ({color}) => (
  <IconPopup15Svg color={color} viewBox='0 0 720 720'>
    <path d='M552,144H264a24,24,0,0,0-24,24V456a24,24,0,0,0,24,24H552a24,24,0,0,0,24-24V168A24,24,0,0,0,552,144ZM528,432H288V192H528Z'/> 
    <path d='M480,540H192V252a24,24,0,0,0-48,0V564a24,24,0,0,0,24,24H480a24,24,0,0,0,0-48Z'/>
  </IconPopup15Svg>
)

const IconPopup15Svg = styled.svg` 
  width:15px;
  height:15px; 
  fill:${props => props.offColor};
	transition: all 0.2s ease-in-out;
`;


////////// SecondaryLabel //////////

const SecondaryLabel = (props) => (
  <SecondaryLabelDiv>{props.text}</SecondaryLabelDiv>
) 
 
const SecondaryLabelDiv = styled.div`
  font-size:8px;
  letter-spacing:0.5px;
  font-weight:700;
  color:#52CCCC;
  font-family:'Nunito Sans'; 
  margin-bottom:3px;
`; 


////////// MainLabel //////////

const MainLabel = (props) => (
  <MainLabelDiv>{props.text}</MainLabelDiv>
)

const MainLabelDiv = styled.div`
  font-size:16px;
  font-family:'Roboto Condensed';
  font-weight:300;
  line-height:20px;
`;


////////// card body

const Card = (props) => (
  <CardDiv> 
    <CardHeader 
      image={props.image}  
      mainLabel={props.mainLabel} 
      secondaryLabel={props.secondaryLabel}
    /> 
    <CardText text={props.summary} />
  </CardDiv>
)

const CardDiv = styled.div`
  width:250px;
  height:350px;
  border-radius:5px;
  margin-bottom:20px;
  margin-right:20px;
  position: relative; 
  bottom:0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2); 
  background:#2E2E40;
  overflow:hidden;
	transition: all 0.2s ease-in-out;
  cursor:pointer;
  :hover {
    box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.2);
    bottom:3px;
    background:#36364D;
  }
  &:hover ${CardFogDiv} {
    box-shadow: inset 0px -33px 57px -32px rgba(255,0,0,0.75); 
  } 
  &:hover ${IconPopup15Svg} {
    fill:#52cccc;
  } 
`;  


////////// export //////////

export default Card;