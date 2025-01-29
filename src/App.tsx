import './App.css'
import GenerateWords from '@/components/GenerateWords'
import TimeLeft from '@/components/TimeLeft'
import RestartButton from '@/components/RestartButton'
import Results from '@/components/Results'
import UserTyping from '@/components/UserTyping'
import useEngine from '@/hooks/useEngine'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import { calculateAccuracyPercentage } from './utils/calculate'
function App() {
  const {words,state,reset,typed,timeLeft,errorsCount,totalTyped} =useEngine()
  

  return (
    <>
      <ToggleDarkMode />
      <TimeLeft timeLeft={timeLeft} />
      <div className="relative break-all text-3xl max-w-xl">
        <GenerateWords words={words} />
        <UserTyping className="inset-0 absolute" words={words} inputWords={typed}/>
      </div>
      <RestartButton onRestart={() => reset()} className='mx-auto  text-slate-500'/>
      <Results state={state} errors={errorsCount} accuracyPercentage={calculateAccuracyPercentage(errorsCount,totalTyped)} total={totalTyped} className=''/>
    </>
  )
}

export default App
