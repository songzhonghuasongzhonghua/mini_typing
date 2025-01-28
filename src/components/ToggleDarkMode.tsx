import { FC } from "react";
import useDarkMode from "@/hooks/useDarkMode";

const ToggleDarkMode:FC = () => {
    const {isDarkMode,toggleDarkMode} = useDarkMode()
    const handleClick = () => {
        toggleDarkMode(!isDarkMode)
    }
    return <button onClick={handleClick} className="absolute top-6 right-6">
        {isDarkMode ? "🌜" : "🌞"}
    </button>
}

export default ToggleDarkMode