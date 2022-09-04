import { useState } from 'react'

const Buttons = ({ good, countGood, neutral, countNeutral, 
                  bad, countBad, increaseByOne }) => {
  return (
    <div>
      <Button onClick={() => { increaseByOne([good, countGood]) }} text="good"></Button>
      <Button onClick={() => { increaseByOne([neutral, countNeutral]) }} text="neutral"></Button>
      <Button onClick={() => { increaseByOne([bad, countBad]) }} text="bad"></Button>
    </div>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine value={good} text="good"></StatisticLine>
      <StatisticLine value={neutral} text="neutral"></StatisticLine>
      <StatisticLine value={bad} text="bad"></StatisticLine>
      <StatisticLine value={bad + good + neutral} text="all"></StatisticLine>
      <StatisticLine value={(good - bad) / (bad + good + neutral)} text="average"></StatisticLine>
      <StatisticLine value={good / (bad + good + neutral) * 100} text="positive"></StatisticLine>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  if (text !== "positive") {
    return (
      <div>{text} {value}</div>
    )
  }

  return (
    <div>{text} {value}%</div>
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
      <Buttons good={good} countGood={countGood} neutral={neutral} countNeutral={countNeutral}
                bad={bad} countBad={countBad} increaseByOne={increaseByOne}></Buttons>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </>
  )
}

export default App