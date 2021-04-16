import React, { useState } from 'react'


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const addGood =()=> {
       setGood(good+1)
    }
    const addBad= () =>setBad(bad+1)
    const addNeutral=()=>setNeutral(neutral+1)
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={addGood}>Good</button>
            <button onClick={addNeutral}>Neutral</button>
            <button onClick={addBad}>Bad</button>
            <h1>statistics</h1>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>All:{good+bad+neutral}</p>
            <p>average:{(good-bad)/(good+bad+neutral)}</p>
            <p>positive:{(good/(good+bad+neutral))*100}%</p>
        </div>
    )
}

export default App