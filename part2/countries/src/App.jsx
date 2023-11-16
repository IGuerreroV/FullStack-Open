import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Search from './components/Search'
import axios from 'axios'

import './App.css'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleInputFilter = (event) => setFilter(event.target.value)

  // Verificamos si filter esta vacio, si esta vacio muestra countires si no esta vacio filtra countries, con nombre.
  // toLowerCase convierte la variable filter a minusculas antesa de compararlo con los nombres de los paises
  const countriesToShow =
  filter === ''
  ? countries
  : countries.filter(
      (countrie) =>
        countrie.name.common.toLowerCase().indexOf(filter.toLocaleLowerCase()) > -1
    )

  return (
    <div>
      <Search
        filter={filter}
        handleFilter={handleInputFilter}/>
      <Countries
        countriesToShow={countriesToShow}
      />
    </div>
  )
}

export default App
