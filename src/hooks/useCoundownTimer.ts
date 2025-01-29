import { useCallback, useEffect, useRef, useState } from "react"
export  interface ICountdownTimerReturn {
    timeLeft:number,
    startCountdown:() => void,
    resetTimeLeft:() => void
}

const useCountdownTimer = (initTimeLeft:number):ICountdownTimerReturn => {
    const timeRef = useRef<any>()
    const [timeLeft,setTimeLeft] = useState(initTimeLeft) 

    const resetTimeLeft = () => {
        setTimeLeft(initTimeLeft)
    }

    const startCountdown = useCallback(() => {
      timeRef.current =  setInterval(() => {
             setTimeLeft((prev) => prev - 1)
        },1000)
    },[])

    useEffect(() => {
        if(timeLeft === 0 && timeRef.current){
            clearInterval(timeRef.current)
        }
    },[timeLeft])
    
    return {
        timeLeft,
        startCountdown,
        resetTimeLeft
    }
}

export default useCountdownTimer