const Search = ({handlers, stateValues}) => {
    const [handleOnChange] = handlers
    const [newQuery] = stateValues
    return (
        <div>
            <p>find countries 
               <input value={stateValues} onChange={handleOnChange}></input>
            </p>
        </div>
    )
}

export default Search