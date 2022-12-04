import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Content from './components/Content'

const App = () => {
    // State hooks
    const [data, setData] = useState([])
    const [newQuery, setNewQuery] = useState('')

    // `content` and helper functions
    const queriedData = () => {
        return data
            .map(country => country.name.common)
            .filter(name => name.toLowerCase().includes(newQuery.toLowerCase()))
    }
    const n_results = 11 // queriedData.length
    const overTenContent = () => [["Too many matches. Specify another filter."], false]
    const twoToTenContent = () => {
        return [["two to ten countries", "yes"], false]
    }
    const oneContent = () => [[], true]
    const [content, findsOneResult] = n_results > 10 ? overTenContent()
        : n_results > 1 ? twoToTenContent()
        : n_results === 1 ? oneContent()
        : [[], false]

    // Event handlers
    const handleNewQuery = (event) => {
        setNewQuery(event.target.value)
    }

    // Fetch
    // useEffect(() => {
    // axios
    //     .get('https://restcountries.com/v4.1/all')
    //     .then(resp => {
    //         setData(resp.data)
    // }, [])

    return (
        <div>
            <Search handler={handleNewQuery} stateValues={newQuery} />
            <Content content={content} oneResult={findsOneResult} />
        </div>
    )
}

export default App