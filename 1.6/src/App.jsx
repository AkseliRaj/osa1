import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const ReviewStatisticText = (props) => (
  <p>
    {props.type} {props.amount}
  </p>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <div>
        <h1>Statistics</h1>
        <ReviewStatisticText type="good" amount={good}/>
        <ReviewStatisticText type="neutral" amount={neutral}/>
        <ReviewStatisticText type="bad" amount={bad}/>
      </div>
    </div>
  )
}

export default App