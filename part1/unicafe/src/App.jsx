import { useState } from 'react'
import  ReactDOM  from 'react-dom'
import Statistics from './components/Statistics'
import './App.css'

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAllClicks(allClicks + 1)
    setAverage(average + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAllClicks(allClicks + 1)
    setAverage(average + 0)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAllClicks(allClicks + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} average={average}/>
    </div>
  )
}

export default App
