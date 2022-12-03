import { useState } from 'react'
import Persons from './components/Persons'
import PersonFrom from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newQuery, setNewQuery] = useState('')

  // Handlers for <h3>s
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const isDuplicate = () => {
      return persons.map(p => p.name).indexOf(newPerson.name) !== -1
    }
    const notAdd = () => {
      alert(`${newName} is already added to phonebook`)
      setPersons(persons)
    }
    const add = () => {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }

    isDuplicate() ? notAdd() : add()
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // Handlers for Filter
  const handleQueryChange = (event) => {
    setNewQuery(event.target.value)
  }

  const personsToShow = newQuery === ''
  ? persons
  : persons.filter(p => 
    {
    const firstCharsLower = p.name.toLowerCase().substring(0, newQuery.length)
    console.log(firstCharsLower);
    return firstCharsLower === newQuery.toLowerCase()
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handlers={[handleQueryChange]} stateValues={[newQuery]}/>
      <h3>add a new</h3>
      <PersonFrom handlers={[handleNameChange, handleNumberChange, addPerson]} stateValues={[newName, newNumber]} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App