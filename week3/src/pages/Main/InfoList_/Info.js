import {useContext } from "react";
import { ModeContext } from '../Main';
const Info = (props) => {
    const {isDark} = useContext(ModeContext)

    return (
        <>
            <div className = {isDark ? "darkInfo" : ""} >
            {props.data}
            </div>
        </>
    );
};

export default Info;