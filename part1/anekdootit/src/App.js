import React, { useState } from 'react'

const Max =(props) =>{
    return(
        <div>
            {props.ane}
            <br/>
            <p>has {props.num} votes</p>
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]
    let ex=[0,0,0,0,0,0]
    const [vote,setVote]=useState(ex)
    let num
    const [selected, setSelected] = useState(0)
    const reSet=()=> {
        num = Math.random()
        num = Math.round(num * 5)
        setSelected(num)
    }
    const addVote=()=>{
        const copy=[...vote]
        copy[selected]++
        setVote(copy)
    }
    const showMax=()=>{
        let max=vote[0]
        let max_num=0
        for(let i=1;i<vote.length;i++){
            if(vote[i]>max) {
                max_num = i;
                max=vote[i];
            }
        }
        return max_num;
    }
    return (
        <div>
            <h1>Anecdote of the day</h1>
            {anecdotes[selected]}<br/>
            <p>has {vote[selected]} votes</p>
            <button onClick={reSet}>next anecdotes</button>
            <button onClick={addVote}>vote</button>
            <h1>Anecdote with most votes</h1>
            <Max ane={anecdotes[showMax()]} num={vote[showMax()]}/>
        </div>
    )

}

export default App