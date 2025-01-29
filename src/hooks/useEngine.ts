import { useState } from "react";
import useWords from "./useWords";
import useCountdownTimer, { ICountdownTimerReturn } from "./useCoundownTimer";
import useTyping, { ITypingReturn } from "./useTyping";

type IState = "start" | "running"| "finished"
interface IUserEngineReturn extends ICountdownTimerReturn,ITypingReturn {
    state:IState,
    setState:(state:IState) => void,
    words:string,
    updateWords:() => void
}

const useEngine =():IUserEngineReturn => {
    const [state,setState]=useState<IState>("start")
    const {words,updateWords} = useWords(10)
    const {timeLeft,startCountdown,resetTimeLeft} = useCountdownTimer(30)
    const {typed,cursor,resetTyping,totalTyped} = useTyping(state !== "finished")
    return {
        state,
        setState,
        words,
        updateWords,
        timeLeft,
        startCountdown,
        resetTimeLeft,
        typed,
        cursor,
        resetTyping,
        totalTyped
    }
}
export default useEngine;