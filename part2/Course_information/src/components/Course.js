import React from "react";

const Course = (props)=>{
    return(
        <div>
            <Header course={props.course}/>
            <Content course={props.course}/>
            <Total course={props.course}/>
        </div>
    )
}

const Header= (props) => {
    return(
        <h1>{props.course.name}</h1>
    )

}

const Part= (props) => {
    return(
        <p>{props.name} {props.exercises}</p>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )

}

const Total= (props) => {
    const parts = props.course.parts.map(course => course.exercises)

    return (
        <p>total of {parts.reduce((s, p) => s + p)} exercises</p>
    )
}

export default Course