import { useContext } from 'react';
import { ModeContext } from './Main';
const DarkMode = () => {
    const {isDark, setIsDark} = useContext(ModeContext)

    const darkButton = () => {
        setIsDark(!isDark)
    }

    return (
        <> 
            <div className = {isDark ? "buttondark" : ""}>
            <button className="button" onClick={darkButton}>Dark Mode</button>
            </div>
        </>
    );
};

export default DarkMode;