import { FC } from 'react'
 const GenerateWords:FC<{words:string}> = ({words}) => {

    return (
        <div className='text-slate-400 '>
            {words}
        </div>
    )}

export default GenerateWords