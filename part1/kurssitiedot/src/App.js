import React from 'react'
/*1.1
const Header= (props) => {
  return(
      <div>
        <h1>{props.course}</h1>
      </div>
  )

}

const Content= (props) => {
  return(
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
  )
}

const Total= (props) => {
  return(
      <div>
        <p>
          Number of exercises {props.num}
        </p>
      </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
      <div>
          <Header course={course} />
          <Content part={part1} exercises={exercises1} />
          <Content part={part2} exercises={exercises2} />
          <Content part={part3} exercises={exercises3} />
          <Total num={exercises1+exercises2+exercises3} />
      </div>
  )
}
 */

/* 1.2
const Header= (props) => {
  return(
      <div>
        <h1>{props.course}</h1>
      </div>
  )

}

const Part= (props) => {
  return(
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
  )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part3} exercises={props.exercises3} />
        </div>
    )

}

const Total= (props) => {
  return(
      <div>
        <p>
          Number of exercises {props.num}
        </p>
      </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
      <div>
          <Header course={course} />
          <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
          <Total num={exercises1+exercises2+exercises3} />
      </div>
  )
}
*/

/* 1.3
const Header= (props) => {
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )

}

const Part= (props) => {
    return(
        <div>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1}  />
            <Part part={props.part2}  />
            <Part part={props.part3}  />
        </div>
    )

}

const Total= (props) => {
    return(
        <div>
            <p>
                Number of exercises {props.num}
            </p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
           <Header course={course}/>
           <Content part1={part1} part2={part2} part3={part3} />
            <Total num={part1.exercises+part2.exercises+part3.exercises} />
        </div>
    )
}*/

//1.4
/*
const Header= (props) => {
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )

}

const Part= (props) => {
    return(
        <div>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part[0]}  />
            <Part part={props.part[1]}  />
            <Part part={props.part[2]}  />
        </div>
    )

}

const Total= (props) => {
    return(
        <div>
            <p>
                Number of exercises {props.num}
            </p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content part={parts} />
            <Total num={parts[0].exercises+parts[1].exercises+parts[2].exercises} />
        </div>
    )
}*/

//1.5
const Header= (props) => {
    return(
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )

}

const Part= (props) => {
    return(
        <div>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.course.parts[0]}  />
            <Part part={props.course.parts[1]}  />
            <Part part={props.course.parts[2]}  />
        </div>
    )

}

const Total= (props) => {
    return(
        <div>
            <p>
                Number of exercises {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}
            </p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}

export default App
