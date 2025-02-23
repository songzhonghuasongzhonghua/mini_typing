import { FC, useRef } from "react";
import { VscDebugRestart } from "react-icons/vsc";


interface RestartButtonProps {
    onRestart:() => void
    className?:string
}

const RestartButton:FC<RestartButtonProps> =({onRestart,className}) => {
    const restartButtonRef = useRef<HTMLButtonElement>(null)

    const onButtonClick = ():void => {
        onRestart()
        restartButtonRef.current?.blur()
    }
    return <button className={`px-6 py-2 mt-5 hover:bg-slate-300/50 dark:hover:bg-slate-600/50 rounded block mt-2 ${className}`} ref={restartButtonRef} onClick={onButtonClick}>
               <VscDebugRestart className="text-2xl"/>
           </button>
}

export default RestartButton