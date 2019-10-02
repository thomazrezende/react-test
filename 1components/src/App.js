import React,{useState} from 'react';
import PrintFoi from './foi';

const names = [
  <span>Thomaz</span>,
  <span>Arthur</span>
];

const family_names = [
  <span>Rezende</span>,
  <span>Soares</span>
];

const pessoas = [
  { id:"sd34kj56s09", name:"Thomaz2", family:"Rezende2"},
  { id:"ls95pr71kf85", name:"Arthur2", family:"Soares2"}
];

// via props object
const PersonProps = (p) => <div>{p.name} {p.family}</div>; 

// fixed props
const PersonFixProps = ({ name, family }) => <div>{ `${name} ${family}` }</div>;

// external src arr
const PersonId = (p) => <div>{ names[p.id] } { family_names[p.id] }</div>;


///////////////////////////////// app ////////////////////////////////

function App(){ 

  //hooks   
  const [nota, setNota] = useState(0); 
  // returns an value and a function to modify the value [ value, setValue ]
  // 0 = default value of nota

  const [showNota, setShowNota] = useState(false); 
    
  return(<>

    <div onClick={ () => setShowNota( !showNota ) } >SHOW/HIDE</div> 
    <div 
      style={{display: showNota ? 'block' : 'none'}} 
      onClick={ () => setNota( 1-nota ) } >
        Nota global: {nota}
    </div> 

    <br/>

    {PrintFoi()} 
    <PersonProps name="Thomaz" family="Rezende" />
    <PersonFixProps name="Arthur" family="Soares" />

    <PersonId id="0" />
    <PersonId id="1" />

    {/* loop */}
    { pessoas.map( (d,i) => {
      return <PersonProps key={d.id} name={d.name} family={d.family} />    
    })}
    
  </>)
}

export default App;
