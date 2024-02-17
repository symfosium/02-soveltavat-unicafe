import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// COMPONENTS
const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


// METHODS
const handleClick = (setCounter) => {
  setCounter(prevValue => prevValue + 1);
}

const totalVotes = (good, neutral, bad) => {
  return (
    good + neutral + bad
  )
}



const avgVotes = (good, neutral, bad) => {
  let avg = (good + neutral + bad) / 3;
  return (
    avg
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const total = totalVotes(good, neutral, bad);
  const avg = avgVotes(good, neutral, bad);
  const percentOfPositiveFeedBack = good === 0 ? 0 : (good / total) * 100;

  return(
    <div>
      <h1>Give Feedback Please</h1>
      <Button handleClick={() => handleClick(setGood)} text="Good"/> 
      <Button handleClick={() => handleClick(setNeutral)}  text="Neutral"/>
      <Button handleClick={() => handleClick(setBad)}  text="Bad"/>
      <h2>Statistics</h2>
        {total === 0 ? <div>No feedback given</div> : 
        <table>
        <tbody>
          <Statistic text="Good" value={good}/>
          <Statistic text="Neutral" value={neutral}/>
          <Statistic text="Bad" value={bad}/>
          <Statistic text="All" value={total}/>
          <Statistic text="Average" value={avg}/>
          <Statistic text="Positive" value={percentOfPositiveFeedBack + '%'}/>
          </tbody>
      </table>
      }
    </div>
  )
}

export default App
