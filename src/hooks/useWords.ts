import { faker } from "@faker-js/faker"
import {  useCallback, useState } from "react"

const useWords = (count:number) => {
    const [words,setWords] = useState(faker.word.words(count))

    const updateWords = useCallback(() => {
        setWords(faker.word.words(count))
    },[count])

    return {
        words,
        updateWords
    }

}
export default useWords