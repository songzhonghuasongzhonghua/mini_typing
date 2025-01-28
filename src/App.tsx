import './App.css'
import GenerateWords from '@/components/GenerateWords'
import {faker} from '@faker-js/faker'
import TimeLeft from '@/components/TimeLeft'
import RestartButton from '@/components/RestartButton'
import Results from '@/components/Results'

function App() {
  const words =faker.word.words(10)
  return (
    <>
      <TimeLeft timeLeft={10} />
      <GenerateWords words={words} />
      <RestartButton onRestart={() => null} className='mx-auto  text-slate-500'/>
      <Results errors={0} accuracyPercentage={100} total={10} className=''/>
    </>
  )
}

export default App
