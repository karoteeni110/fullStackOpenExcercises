import { useState } from 'react'

const Display = ({ text, counter }) => {
  return (
    <div>{text} {counter}</div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, countGood] = useState(0)
  const [neutral, countNeutral] = useState(0)
  const [bad, countBad] = useState(0)

  const increaseByOne = (props) => props[1](props[0] + 1)

  return (
    <>
      <h1> give feedback</h1>
      <div>
        <Button onClick={() => { increaseByOne([good, countGood]) }} text="good"></Button>
        <Button onClick={() => { increaseByOne([neutral, countNeutral]) }} text="neutral"></Button>
        <Button onClick={() => { increaseByOne([bad, countBad]) }} text="bad"></Button>
      </div>
      <h1>
        statistics
      </h1>
      <div>
         <Display counter={good} text="good"></Display>
         <Display counter={neutral} text="neutral"></Display>
         <Display counter={bad} text="bad"></Display>
      </div>
    </>
  )
}

export default App