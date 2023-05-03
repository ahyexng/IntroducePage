import Info from "./Info";
import {useContext } from "react";
import { ModeContext } from '../Main';

const InfoList = (props) => {
    const {isDark} = useContext(ModeContext)
    const {name, info} = props.data;
    return (
        <>
            <div className={isDark ? "darkname" : "name"}>{name}</div>
            <div className={isDark ? "darkcontacts" : "contacts"}>
                {info.map((data, index) => (
                    <Info data = {data} key ={index}/>
                ))}
            </div>
        </>
    );
};

export default InfoList;