import { useEffect, useState } from "react"
const matchDark = '(prefers-color-scheme: dark)'
interface IDarkModeReturn  {
    isDarkMode:boolean,
    toggleDarkMode:(isDarkMode:boolean) => void
}

const useDarkMode = ():IDarkModeReturn => {
    const [isDarkMode,setIsDarkMode]=useState(window.matchMedia && window.matchMedia(matchDark).matches)

    //监听媒体查询dark模式的变化
    useEffect(() => {
        const media = window.matchMedia(matchDark)
        const handler = () => setIsDarkMode(media.matches)
        media.addEventListener("change",handler)
        return () => media.removeEventListener("change",handler)
    })

    useEffect(() => {
        if(isDarkMode){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[isDarkMode])

    const toggleDarkMode = (isDarkMode:boolean) => setIsDarkMode(isDarkMode)

    return {
        isDarkMode,
        toggleDarkMode
    }
}

export default useDarkMode