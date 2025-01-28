import './App.css'
import GenerateWords from '@/components/GenerateWords'
import {faker} from '@faker-js/faker'
import TimeLeft from '@/components/TimeLeft'
import RestartButton from './components/RestartButton'
function App() {
  const words =faker.word.words(10)
  return (
    <>
      <TimeLeft timeLeft={10} />
      <GenerateWords words={words} />
      <RestartButton onRestart={() => null} className='mx-auto block text-slate-500'/>
    </>
  )
}

export default App
