import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Content from './components/Content'

const App = () => {
    // State hooks
    const [data, setData] = useState('')
    const [newQuery, setNewQuery] = useState('')

    // Event handlers
    const handleNewQuery = (event) => {
        setNewQuery(event.target.value)
    }

    // Fetch
    axios
        .get('https://restcountries.com/v3.1/all')
        .then(resp => {
            setData(resp.data)
        }, [])
    
    // Filter data
    const content = newQuery => {
        const findOverTen = () => true
        const findTwoToTen = () => true
        const OverTenContent = () => {return (<div>aaa</div>)}
        const TwoToTenContent = () => {
            findTwoToTen()
            ? {return (<div>OK</div>)}
            {return (<div><div/>)}
        }

        findOverTen()
        ? OverTenContent()
        : { findTwoToTen()
            ? TwoToTenContent()  
            : {}}
    const dataToShow = newQuery => {
        return data
    }

    return (
        <div>
            <Search handlers={newQuery} stateValues={handleNewQuery} />
            <Content content={content} /> 
            <Country dataToShow={dataToShow} />
        </div>
    )
}

export default App