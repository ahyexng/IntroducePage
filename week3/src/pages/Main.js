import "../Main.css";
import InfoList from "./InfoList";
import IntroduceList from "./IntroduceList";
import data from "./Data.json";
import Side from "./Side";

const Main = () => {

return (
    <>
    <Side data = {data} />
    <InfoList data = {data}  />
    <IntroduceList data = {data}  />
    </>
    )
};

export default Main;