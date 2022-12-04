import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Content from './components/Content'

const App = () => {
    // State hooks
    const [data, setData] = useState([])
    const [newQuery, setNewQuery] = useState('')

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
    const content = newQuery => {
        const findOverTen = () => true
        const findTwoToTen = () => true
        const OverTenContent = () => {
            return ["Too many matches. Specify another filter."]
        }
        const TwoToTenContent = () => {
            // console.log(
                //  data.map(country => country.name.common))

            return data
            // .map(country => country.name.common)
                // .filter(name => name.toLowerCase().includes(newQuery.toLowerCase()))
        }

        // eslint-disable-next-line no-unused-expressions
        findOverTen()
            ? OverTenContent()
            : () => { }

        // eslint-disable-next-line no-unused-expressions
        findTwoToTen()
            ? TwoToTenContent()
            : () => { }

        return []
    }

    return (
        <div>
            <Search handlers={handleNewQuery} stateValues={newQuery} />
            <Content content={content(newQuery)} />
            {/* <Country dataToShow={dataToShow} /> */}
        </div>
    )
}

export default App