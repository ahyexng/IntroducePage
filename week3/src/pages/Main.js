import "../Main.css";
import InfoList from "./InfoList";
import IntroduceList from "./IntroduceList";
import data from "./Data.json";
import Side from "./Side";
import Sns from "./Sns";

const Main = () => {

return (
    <>
    <Side data = {data} />
    <InfoList data = {data}  />
    <div className="line">
    <IntroduceList data = {data}  />
    </div>
    <Sns data = {data} />
    
    </>
    )
};

export default Main;