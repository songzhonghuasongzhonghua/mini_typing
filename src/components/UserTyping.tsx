import { FC } from "react";

interface UserTypingProps {
    words:string,
    className?:string
}

const UserTyping:FC<UserTypingProps> = ({words,className}) => {
    const charList =  words.split("")

    return <div className={`${className}`}>
        {charList.map((char,index) => {
            return <Charest key={index} char={char}/>
        })}
    </div>
}

const Charest:FC<{char:string}> = ({char}) => {
    return <span>{char}</span>
}



export default UserTyping