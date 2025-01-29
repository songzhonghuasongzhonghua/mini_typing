import { FC } from "react";
import {motion} from "framer-motion"
import cn from "@/utils/cn";

interface UserTypingProps {
    words:string,
    className?:string,
    inputWords:string
}

const UserTyping:FC<UserTypingProps> = ({words,className,inputWords}) => {
    const charList =  inputWords.split("")

    return <div className={`${className}`}>
        {charList.map((char,index) => {
            return <Charest key={index} 
                            char={words[index]} 
                            isCorrect={char === words[index]}
                            isSpace={words[index] === " "}
                    />
        })}
        <InputCursor/>
    </div>
}

const Charest:FC<{char:string,isCorrect:boolean,isSpace:boolean}> = ({char,isCorrect,isSpace}) => {
    return <span 
         className={cn("text-primary-500 dark:text-green-500",
            !isCorrect && "text-red-500 dark:text-red-500",
            isSpace && !isCorrect && "bg-red-500/90"
            )
        }>{char}</span>
}

const InputCursor:FC = () => {
    return <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{repeat:Infinity,duration:0.8}}
            exit={{opacity:1}}
            className="w-0.5 h-7 bg-primary-500 inline-block"/> 
}



export default UserTyping