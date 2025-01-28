import { FC } from "react";

const TimeLeft:FC<{timeLeft:number}> = ({timeLeft}) => {

     
    return  <div className="text-green-500 dark:text-primary-400 mb-2 font-medium text-base">
        time: {timeLeft}
    </div>
}

export default TimeLeft