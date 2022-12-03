import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {name: newName}
    const isDuplicate = () => {return Object.values(persons).indexOf(newPerson.name) === -1}
    const notAdd = () => {
      alert(`${newName} is already added to phonebook`)
      setPersons(persons)
    }
    const add = () => {
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
    
    isDuplicate() ? notAdd() : add()
  } 
  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div >
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <Person key={person.name} person={person}/>)}
      </div>
    </div>
  )
}

export default App