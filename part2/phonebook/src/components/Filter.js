const Filter = ({handlers, stateValues}) => {
    const [handleQueryChange] = handlers
    const [newQuery] = stateValues
    return (
        <div>
            <p>filter shown with <input value={newQuery} onChange={handleQueryChange}></input></p>
        </div>
    )
}

export default Filter