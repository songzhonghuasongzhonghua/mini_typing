import { useState } from "react";
import useWords from "./useWords";

type IState = "pending" | "running"| "finished"
interface IUserEngineReturn {
    state:IState,
    setState:(state:IState) => void,
    words:string,
    updateWords:() => void
}

const useEngine =():IUserEngineReturn => {
    const [state,setState]=useState<IState>("pending")
    const {words,updateWords} = useWords(10)

    return {
        state,
        setState,
        words,
        updateWords
    }
}
export default useEngine;