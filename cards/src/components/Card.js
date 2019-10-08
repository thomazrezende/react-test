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
  left:0;
  top:100%;
  width:100%;
  height:100%;
  box-shadow: 0 0  80px 100px ${props => props.theme.mainBg}; 
  z-index:1;  
	transition: box-shadow 0.2s ease-in-out;
`;

////////// text //////////    
 
const CardText = ({text}) => (
  <CardTextDiv>{text}</CardTextDiv>
)

const CardTextDiv = styled.div`
  position:absolute; 
  height:calc(50% - 30px);
  top:50%;
  left:0;
  padding:5px 15px 0 15px;
  color:${props => props.theme.shiftColor};
  font-family:'Nunito Sans';
  font-size:12px;
  font-weight:300;
  line-height:16px;
  box-sizing:border-box; 
  overflow:hidden; 
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

const CardTitle = (props) => ( 
  <CardTitleDiv>
    <MainIcon/>
    <SecondaryLabel text={props.secondaryLabel} />
    <MainLabel text={props.mainLabel} />
  </CardTitleDiv> 
)

const CardTitleDiv = styled.div`
  position:absolute;
  z-index:2;
  bottom:0;
  padding:20px 25px 5px 15px; 
  color:${props => props.theme.mainColor};
  box-sizing:border-box; 
  width:100%;
`; 

////////// footer //////////

const CardFooter = () => (
  <CardFooterDiv></CardFooterDiv>
) 

const CardFooterDiv = styled.div` 
  height:30px;
  width:100%;
  position: absolute;
  bottom:0; 
  box-sizing:border-box;
`;

////////// icons ////////// 

const MainIcon = () => ( 
  <MainIconDiv>
    <MainIconSvg viewBox='0 0 720 720'>
      <IconPopup15  /> 
    </MainIconSvg>
  </MainIconDiv>
)  

const MainIconDiv = styled.div`
  position:absolute;
  width:21px;
  height:21px;
  right:5px;
  bottom:5px; 
  z-index:2; 
`;

const MainIconSvg = styled.svg` 
  position:absolute;;
  width:15px;
  height:15px; 
  top:3px;
  left:3px;
  fill:${props => props.theme.secondaryColor};
  transition: fill 0.2s ease-in-out;
`;

// icons

const IconPopup15 = () => (
  <g>
    <path d='M552,144H264a24,24,0,0,0-24,24V456a24,24,0,0,0,24,24H552a24,24,0,0,0,24-24V168A24,24,0,0,0,552,144ZM528,432H288V192H528Z'/> 
    <path d='M480,540H192V252a24,24,0,0,0-48,0V564a24,24,0,0,0,24,24H480a24,24,0,0,0,0-48Z'/> 
  </g>
) 

const IconLocker15 = () => (
  <g>
    <path d='M552,144H264a24,24,0,0,0-24,24V456a24,24,0,0,0,24,24H552a24,24,0,0,0,24-24V168A24,24,0,0,0,552,144ZM528,432H288V192H528Z'/> 
    <path d='M480,540H192V252a24,24,0,0,0-48,0V564a24,24,0,0,0,24,24H480a24,24,0,0,0,0-48Z'/> 
  </g>
) 


////////// SecondaryLabel //////////

const SecondaryLabel = ({text}) => (
  <SecondaryLabelDiv>{text}</SecondaryLabelDiv>
) 
 
const SecondaryLabelDiv = styled.div`
  font-size:8px;
  letter-spacing:0.5px;
  font-weight:700;
  color:${props => props.theme.goColor};
  font-family:'Nunito Sans'; 
  margin-bottom:3px; 
`;  

////////// MainLabel //////////

const MainLabel = ({text}) => (
  <MainLabelDiv>{text}</MainLabelDiv>
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
    <CardFooter />
  </CardDiv>
)

const CardDiv = styled.div`
  width:250px;
  height:330px;
  border-radius:5px;
  margin-bottom:20px;
  margin-right:20px;
  position: relative; 
  bottom:0;
  left:0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2); 
  background:${props => props.theme.mainBg};
  overflow:hidden;
	transition: all 0.2s ease-in-out;
  cursor:pointer;
  :hover {
    box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.2);
    bottom:2px;
    left:1px;
    background:${props => props.theme.shiftBg};
  }
  &:hover ${CardFogDiv} { 
    box-shadow: 0 0 40px 60px ${props => props.theme.shiftBg}; 
  } 
  &:hover ${MainIconSvg} {
    fill:${props => props.theme.goColor};
  } 
`;   

////////// export //////////

export default Card;