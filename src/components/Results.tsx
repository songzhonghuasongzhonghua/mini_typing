import { FC } from "react";
import {motion} from "framer-motion"
interface ResultsProps {
    errors:number,
    accuracyPercentage:number,
    total:number,
    className?:string
}

const Results:FC<ResultsProps> = ({errors,accuracyPercentage,total,className}) => {
    const initial = {opacity:0}
    const animate = {opacity:1}
    const duration = {duration:0.5}
    
    return <motion.ul className={`${className} text-primary-400 text-lg flex flex-col items-center space-y-3`}>
        <motion.li 
            initial={initial}
            animate={animate}
            transition={{...duration,delay:0}}
            className="text-xl font-bold">Results</motion.li>
        <motion.li 
            initial={initial}
            animate={animate}
            transition={{...duration,delay:0.5}}
        >Accuuacy: {accuracyPercentage}%</motion.li>
        <motion.li 
            initial={initial}
            animate={animate}
            transition={{...duration,delay:1}}
            className="text-red-500">Errors: {errors}</motion.li>
        <motion.li 
            initial={initial}
            animate={animate}
            transition={{...duration,delay:1.4}}
        >Total: {total}</motion.li>
    </motion.ul>
}

export default Results