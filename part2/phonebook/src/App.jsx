import { useState } from 'react'
import Person from './components/Person'
import './App.css'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('buton clicked', event.target);

    persons.some((person) => person.name === newName) ? alert(`${newName} is already added to phonebook`) : setPersons([...persons, { name: newName, number: newNumber}])

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => setFilter(event.target.value)

  const personToShow =
  // Verificamos si el parametro 'filter' esta vacio.
  // Si esta vacio, devolvemos la lista de personas original.
  filter === ''
    ? persons

  // Si el parametro 'filter' no esta vacio, filtraremos la lista de personas utilizando la siguiente funcion.
    : persons.filter(
  // La duncion 'filter()' toma un parametro 'person'.
  // Este parametro representa un objeto de persona.
      (person) =>
  // La expresion 'person.name.toLowerCase().indexOf(filter.toLowerCase()) > -1' verifica si el nombre de la persona contiene la cadena de filtro.
  // El metodo 'indexOf()' se utiliza para encontrar la posicion de la cadena de filtro en el nombre de la persona.
  // La expresion devuelve 'true' si se encuentra la cadena de filtro en el nombre de la persona y 'false' de lo contrario
        person.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input placeholder='enter the name' onChange={handleFilter}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} key={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Person personToShow={personToShow} />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
