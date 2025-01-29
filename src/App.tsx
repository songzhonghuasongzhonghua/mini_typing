import './App.css'
import GenerateWords from '@/components/GenerateWords'
import TimeLeft from '@/components/TimeLeft'
import RestartButton from '@/components/RestartButton'
import Results from '@/components/Results'
import UserTyping from '@/components/UserTyping'
import useEngine from '@/hooks/useEngine'
import ToggleDarkMode from '@/components/ToggleDarkMode'
function App() {
  const {words,state,setState,updateWords,typed} =useEngine()
  

  return (
    <>
      <ToggleDarkMode />
      <TimeLeft timeLeft={10} />
      <div className="relative break-all text-3xl max-w-xl">
        <GenerateWords words={words} />
        <UserTyping className="inset-0 absolute" words={words} inputWords={typed}/>
      </div>
      <RestartButton onRestart={() => null} className='mx-auto  text-slate-500'/>
      <Results errors={0} accuracyPercentage={100} total={10} className=''/>
    </>
  )
}

export default App
