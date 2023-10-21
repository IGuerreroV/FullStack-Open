import { useState } from 'react'
import './App.css'



const App = () => {
  const [selected, setSelected] = useState(0)

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  return (
    <div>
      {anecdotes[selected]}
      <button onClick={handleRandom}>
        dame click
      </button>
    </div>
  )
}

const anecdotes = [
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging.',
  'Plan to throw one (implementation) away; you will, anyhow.',
  'Every good work of software starts by scratching a developers personal itch.',
  'Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away'
]

export default App;
