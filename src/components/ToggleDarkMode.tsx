import { FC, useRef } from "react";
import useDarkMode from "@/hooks/useDarkMode";

const ToggleDarkMode:FC = () => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const {isDarkMode,toggleDarkMode} = useDarkMode()
    const handleClick = () => {
        toggleDarkMode(!isDarkMode)
        buttonRef.current?.blur()
    }
    return <button ref={buttonRef} onClick={handleClick} className="absolute top-6 right-6">
        {isDarkMode ? "🌜" : "🌞"}
    </button>
}

export default ToggleDarkMode