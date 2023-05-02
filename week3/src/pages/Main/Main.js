import {useState } from "react";
import InfoList from "./InfoList/InfoList";
import IntroduceList from "./IntroduceList/IntroduceList";
import data from "../Data.json";
import Side from "./Side";
import Sns from "./Sns";
import Dog from "./Dog";
import "../Main.css"
const Main = (props) => {
    const [click, setClick] = useState(false);
    
return (
    <>
    <Side data = {data} />
    <InfoList data = {data}  />
    <div className="line">
    <IntroduceList data = {data}  />
    </div>
    <Sns data = {data} />
    <div className="dogImg">
    <button onClick={()=>{setClick(!click)}} className="btn">우리집 강아지</button>
    {click && <Dog/>}
    </div>
    </>
    )
};

export default Main;