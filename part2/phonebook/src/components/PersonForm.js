const PersonForm = ({ handlers, stateValues }) => {
    const [handleNameChange, handleNumberChange, addPerson] = handlers
    const [newName, newNumber] = stateValues
    return (
        <form onSubmit={addPerson}>
            <div >
                <div>name: <input value={newName} onChange={handleNameChange} /></div>
                <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
                <div><button type="submit">add</button></div>
            </div>
        </form>
    )
}

export default PersonForm