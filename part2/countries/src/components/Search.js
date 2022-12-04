const Search = ({handlers, stateValues}) => {
    const {handleOnChange} = handlers
    const {newQuery} = stateValues
    return (
        <div>
            find countries 
            <input value={newQuery} onChange={handleOnChange}></input>
        </div>
    )
}

export default Search