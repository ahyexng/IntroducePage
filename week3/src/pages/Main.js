import "../Main.css";
import InfoList from "./InfoList";
import IntroduceList from "./IntroduceList";
import data from "./Data.json";

const Main = () => {

return (
    <>
    <InfoList data = {data}  />
    <IntroduceList data = {data}  />
    </>
    )
};

export default Main;