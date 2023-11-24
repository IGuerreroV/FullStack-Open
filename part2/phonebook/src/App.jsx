import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personsServices from './services/persons'
import './App.css'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsServices
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    console.log('buton clicked', event.target);

    const newPerson = {
      name: newName,
      number: newNumber,
      id: ''
    }

    // Verifica si una persona con el nombre `newName` ya existe en el array `persons`
    const isPersonAdded = persons.some((person) => person.name === newName)

    // Si una persona con el nombre `newName` ya existe, se le pregunta al usuario si desea actualizar su número
    if(isPersonAdded) {
      const confirmUpdate = window.confirm(`${newName}' is already added to phonebook, replace the old number with a new one?`)

      // Si el usuario confirma la actualización, se encuentra el objeto de persona con el nombre `newName`
      if(confirmUpdate){

        // Encuentra el objeto de persona con el nombre `newName`
        const personToUpdate = persons.find(person => person.name === newName)

        // Se actualiza el número de la persona usando la función `personsServices.update()`
        personsServices
          // Actualiza el numero de la persona con el id especifico
          .update(personToUpdate.id, newPerson)
          .then(updatenNumber => {
            // Se actualiza el estado `persons` con el objeto de persona actualizado
            setPersons(persons.map(person => person.id !== updatenNumber.id ? person : updatenNumber))
          })
          .catch(error => {
            // Se muestra un mensaje de alerta con el mensaje de error
            alert(error)
          })
      }else{
        alert('Number update canceled.')
      }
    } else{
      personsServices
        .create(newPerson)
        .then(returnedPersons => {
          setPersons([...persons, returnedPersons])
          setNewName('')
          setNewNumber('')
      })
      .catch(error => {
        alert('Error adding person:', error)
      })
    }

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

  const handleDelete = (id, name) => {

    if(window.confirm(`Delete ${name}?`)) {
      personsServices
      .deletePerson(id)
      .then(() => {
        setPersons([...persons.filter(person => person.id !== id)])
      })
      .catch(error => {
        console.log('error al eliminar: ', error);
      })
    }
  }

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
      <Person handleDelete={handleDelete} personToShow={personToShow} />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
