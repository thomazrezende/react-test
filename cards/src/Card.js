import React from 'react'; 
import styled from "styled-components";

////////// card body

const Card = (d) => (
  <CardDiv> 
    <CardHeader 
      image={d.image}  
      mainLabel={d.mainLabel} 
      secondaryLabel={d.secondaryLabel}
    /> 
    <CardText text={d.summary} />
  </CardDiv>
)

const CardDiv = styled.div`
  width:250px;
  height:310px;
  border-radius:5px;
  margin-bottom:20px;
  margin-right:20px;
  position: relative; 
  bottom:0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  background:#2E2E40;
  overflow:hidden;
  cursor:pointer;
  :hover {
    box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.2);
    bottom:3px;
    background:#36364D;
  }
  -webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all  0.2s ease-in-out;
	-ms-transition: all  0.2s ease-in-out;
	-kthtml-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
`;


////////// text //////////
 
const CardText = (d) => (
  <CardTextDiv>{d.text}</CardTextDiv>
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


////////// header //////////

const CardHeader = (d) => (
  <CardHeaderDiv>
    <CardTitle 
      mainLabel={d.mainLabel} 
      secondaryLabel={d.secondaryLabel}>
    </CardTitle>
    <CardImageDiv image={d.image}></CardImageDiv> 
    <CardFogDiv/>
  </CardHeaderDiv>
) 

const CardHeaderDiv = styled.div`
  position:absolute;
  width:100%;
  height:50%;
  top:0;
  left:0;
` ;


////////// fog //////////

const CardFogDiv = styled.div`
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:100%;  
  background: linear-gradient(180deg, rgba(46,46,64,0) 0%, rgba(46,46,64,1) 100%);
  z-index:1;
  :hover {
    background: linear-gradient(180deg, rgba(54,54,77,0) 0%, rgba(54,54,77,1) 100%);
  }
`;


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

const CardTitle = (d) => ( 
  <CardTitleDiv>
    <SecondaryLabel text={d.secondaryLabel} />
    <MainLabel text={d.mainLabel} />
    <CardIcon />
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

const CardIcon = (d) => (
  <CardIconSvg viewBox='0 0 720 720'>
    <path d='M552,144H264a24,24,0,0,0-24,24V456a24,24,0,0,0,24,24H552a24,24,0,0,0,24-24V168A24,24,0,0,0,552,144ZM528,432H288V192H528Z'/> 
    <path d='M480,540H192V252a24,24,0,0,0-48,0V564a24,24,0,0,0,24,24H480a24,24,0,0,0,0-48Z'/>
  </CardIconSvg>  
)

const CardIconSvg = styled.svg` 
  width:15px;
  height:15px;
  position:absolute; 
  right:10px;
  bottom:5px;
  fill:#6C6C80;
`;


////////// SecondaryLabel //////////

const SecondaryLabel = (d) => (
  <SecondaryLabelDiv>{d.text}</SecondaryLabelDiv>
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

const MainLabel = (d) => (
  <MainLabelDiv>{d.text}</MainLabelDiv>
)

const MainLabelDiv = styled.div`
  font-size:16px;
  font-family:'Roboto Condensed';
  font-weight:300;
  line-height:20px;
`;


////////// export //////////

export default Card;