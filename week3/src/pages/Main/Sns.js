import {Link} from 'react-router-dom';
import {useContext } from "react";
import { ModeContext } from '../Main/Main';

const Sns = (props) => {
    const {isDark} = useContext(ModeContext)
    const {insta} = props.data;
    return (
        <>
            <div className={isDark ? "darksns" : "sns"}>
            <p>{insta}</p>
            <Link to='https://www.instagram.com/aeyxung/'><img src="./img/instagram_logo.png" alt="snsimg"/></Link>
            </div>
        </>
    );
};

export default Sns;