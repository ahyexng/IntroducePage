import { useEffect, useState } from "react";
import {useContext } from "react";
import { ModeContext } from '../Main/Main';
const Dog = (click) => {
    const {isDark} = useContext(ModeContext)
    const [fade,setFade] = useState('');
    useEffect(()=>{
       setFade('end') ;
    
        return ()=>{
            setFade('');
            console.log("클릭할때마다 useEffect 실행");
        };
    },[click]);
  
    return (
      <div className = "dog_"> 
        <img src='./img/dog.png' className={'start '+ fade} alt="dogimg"></img>
      </div>
    );
  };

export default Dog;