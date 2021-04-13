import React from 'react'
const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name},you are {props.age} years old</p>
        </div>
    )
}

const Test = (props) => {
    return (
        <div>
            <p>Hello world{props.name}</p>
        </div>
    )
}
const App = () => {
    const name = 'Peter';
    const age = 10;
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="mjj" age={17+3} />
            <Hello name={name} age={age}/>
            <Test name="123"/>
        </div>
    )
}

export default App