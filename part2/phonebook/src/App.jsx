import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import './App.css'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3000/persons')
      .then(response => {
        setPersons(response.data)
      })
  })

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
      <Filter handleFilter={handleFilter}/>
      <h2>Add a new</h2>
      <PersonForm
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newNumber={newNumber}
        newName={newName}
        addName={addName}
      />
      <Person personToShow={personToShow} />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
