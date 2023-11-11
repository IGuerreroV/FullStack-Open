import { useState } from 'react'
import Person from './components/Person'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('buton clicked', event.target);

    persons.some((person) => person.name === newName) ? alert(`${newName} is already added to phonebook`) : setPersons([...persons, { name: newName}])

    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input
          value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Person persons={persons}/>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
