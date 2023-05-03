import {useState, createContext } from "react";
import InfoList from "./InfoList_/InfoList";
import IntroduceList from "./IntroduceList/IntroduceList";
import data from "../Data.json";
import Side from "./Side";
import Sns from "./Sns";
import Dog from "./Dog";
import DarkMode from "./DarkMode";
export const ModeContext = createContext(null);

const Main = () => {
    const [click, setClick] = useState(false);
    const [isDark , setIsDark] = useState(false);
    
return (
    <>
    <ModeContext.Provider value={{isDark, setIsDark}}>
    <Side data = {data} />
    <InfoList data = {data}  />
    <div className={isDark ? "darkline" : "line"}>
    <IntroduceList data = {data}  />
    </div>
    <Sns data = {data} />
    <div className={isDark ? "darkdogimg" : "dogImg"}>
    <button onClick={()=>{setClick(!click)}} className="btn">우리집 강아지</button>
    {click && <Dog/>}
    </div>
    <DarkMode />
    </ModeContext.Provider>
    </>
    )
};

export default Main;