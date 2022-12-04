import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Content from './components/Content'

const App = () => {
    // State hooks
    const [data, setData] = useState(["a", "aa"])
    const [newQuery, setNewQuery] = useState('')

    // Helper functions
    const findOverTen = (newQuery) => {
        return newQuery === 'aaa' ? true : false
    }
    const findTwoToTen = (newQuery) => false
    const OverTenContent = () => {
        return ["Too many matches. Specify another filter."]
    }
    const TwoToTenContent = () => {
        return ["two to ten countries", "yes"]
        // data
        // .map(country => country.name.common))
        // .filter(name => name.toLowerCase().includes(newQuery.toLowerCase())

    }
    const content = findOverTen(newQuery) ? OverTenContent()
        : findTwoToTen(newQuery) ? TwoToTenContent()
            : []

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

    // Filter data


    return (
        <div>
            <Search handler={handleNewQuery} stateValues={newQuery} />
            <Content content={content} />
            {/* <Country dataToShow={dataToShow} /> */}
        </div>
    )
}

export default App