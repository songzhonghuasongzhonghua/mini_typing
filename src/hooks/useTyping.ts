import { useEffect, useRef, useState } from "react";

export interface ITypingReturn {
    typed:string,
    cursor:number,
    totalTyped:number,
    resetTyping:() => void,
    cleanTyping:() => void
}

const useTyping =(enable:boolean):ITypingReturn => {
    const [typed,setTyped]=useState("")
    const [cursor,setCursor]=useState(0)
    const totalTyped = useRef(0)

    const handleKeyDown = (e:KeyboardEvent) => { 
        if(!enable) return
        switch(e.key){
            case "Backspace":
                setTyped((prev) => prev.slice(0,-1))
                setCursor((prev) => Math.max(prev -1,0))
                break;
            default:
                if(e.code.startsWith("Key") || e.key === " " || e.key === "-"){
                    setTyped((prev) => prev + e.key)
                    setCursor((prev) => prev + 1)
                    totalTyped.current += 1
                }
                break;
        }
        
    }


    useEffect(() => {
        window.addEventListener("keydown",handleKeyDown)
        return () => {
            window.removeEventListener("keydown",handleKeyDown)
        }
    },[])



    const resetTyping = () => {
        setTyped("")
        setCursor(0)
        totalTyped.current = 0
    }

    const cleanTyping = () => {
        setTyped("")
        setCursor(0)
    }

    return {
        typed,
        cursor,
        totalTyped:totalTyped.current,
        resetTyping,
        cleanTyping

    }
}

export default useTyping;