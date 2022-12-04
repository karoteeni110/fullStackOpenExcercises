import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Content from './components/Content'

const App = () => {
    // State hooks
    const [data, setData] = useState(["a", "aa"])
    const [newQuery, setNewQuery] = useState('')
    const [content, setContent] = useState([])

    // helper function
    const setContentToShow = (newQuery) => {
        const findOverTen = () => false
        const findTwoToTen = () => true
        const OverTenContent = () => {
            setContent(["Too many matches. Specify another filter."])
        }
        const TwoToTenContent = () => {
            setContent(
                ["two to ten countries",
            "yes"]
                // data
                // .map(country => country.name.common))
                // .filter(name => name.toLowerCase().includes(newQuery.toLowerCase())
                )
        }

        // eslint-disable-next-line no-unused-expressions
        findOverTen() ? OverTenContent()
            : findTwoToTen() ? TwoToTenContent()
            : {}
    }

    // Event handlers
    const handleNewQuery = (event) => {
        setNewQuery(event.target.value)
        setContentToShow(newQuery)
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