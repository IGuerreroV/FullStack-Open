import { useState } from 'react'
import './App.css'



const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0])
  const [maxVoted, setMaxVoted] = useState(0)

   // Funcion para calcular la anecdota con mas votos
  const calcMaxAnecdotesVotes = () => {
    // Variable para almacenar el numero de votos maximo
    let max = 0

    // Iteracion a traves de la matriz de votos
    for(const vote in votes) {
      //Comprueba si el numero de votos actual es mayor que el maximo
      if (votes[vote] > max) {
        // Actualiza el numero de votos maximo
        max = votes[vote]
        // Actualiza el indice de la anecdota con mas votos
        setMaxVoted(vote)
        console.log(max);
      }
    }
  }

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  // Esta función incrementa el número de votos de la anécdota seleccionada.
  const handleVote = () => {
    // Creo una copia de votes
    const points = [...votes]
    // Incrementa en 1 el numero de votos de la anecdota seleccionada
    points[selected] +=1
    // Registra la matriz de votos actualizada en la consola para fines de depuración.
    console.log(points)
    // Actualiza el estado con la matriz de votos actualizada
    setVotes(points)

    // Llama a la funcion para calcular la anecdota con mas votos
    calcMaxAnecdotesVotes()
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has: {votes[selected]}</p>
      <button onClick={handleVote}>
        vote
      </button>
      <button onClick={handleRandom}>
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxVoted]}</p>
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
