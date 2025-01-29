import { useEffect, useState } from "react";
import useWords from "./useWords";
import useCountdownTimer, { ICountdownTimerReturn } from "./useCoundownTimer";
import useTyping, { ITypingReturn } from "./useTyping";

export type IState = "start" | "running"| "finished"
interface IUserEngineReturn  {
    state:IState,
    setState:(state:IState) => void,
    words:string,
    updateWords:() => void,
    errorsCount:number,
    typed:string,
    timeLeft:number,
    totalTyped:number,
    reset:() => void
}

const TIME_LEFT = 30

const useEngine =():IUserEngineReturn => {
    const [state,setState]=useState<IState>("start")
    const {words = "",updateWords} = useWords(10)
    const {timeLeft,startCountdown,resetTimeLeft} = useCountdownTimer(TIME_LEFT)
    const {typed,cursor,resetTyping,totalTyped,cleanTyping} = useTyping(state !== "finished")
    const [errorsCount,setErrorsCount]=useState(0)

    //开始打字
    useEffect(() => {
        if(cursor === 1 && state === 'start'){
            setState("running")
            startCountdown()
        }

    },[state,cursor])


    //结束打字
    useEffect(() => {
        if(state === 'running' && timeLeft === 0){
            setState("finished")
        }
    },[state,timeLeft])

    //计算错误数
    useEffect(() => {
            const exceptedWords = words.slice(0,Math.min(cursor,words.length))
            if(cursor > 0 && exceptedWords[cursor -1] !== typed[cursor -1]){
                setErrorsCount(e => e += 1)
            }
    },[typed,cursor,words])



    //打到下一页
    useEffect(() => {
        if(state === "running" && cursor === words.length){
            updateWords()
            cleanTyping()

        }

    },[state,words,typed,cursor])


    const reset = () => {
        setState("start")
        updateWords()
        resetTimeLeft()
        resetTyping()
        setErrorsCount(0)
    }


    return {
        state,
        setState,
        words,
        updateWords,
        errorsCount,
        totalTyped,
        timeLeft,
        typed,
        reset
    }
}
export default useEngine;