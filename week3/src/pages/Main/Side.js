import {useContext } from "react";
import { ModeContext } from '../Main/Main';

const Side = (props) => {
    const {isDark} = useContext(ModeContext)
    const {side} = props.data;
    return (
        <>
        <div class={isDark ? "darkmenubar" : "menu-bar"}>
        <div class = "index">
            <img className="profile" src ="./img/profile.png"/>
        <h3 class="click">{side}</h3>
        </div>
        </div>
        </>
    );
};

export default Side;