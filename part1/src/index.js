import React from 'react'
import ReactDOM from 'react-dom'


/*const Header = (props) =>{
  return(<div>
    <h1>{props.course}</h1>
  </div>)
}
const Part = (props)=>{
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}
const Content = (props)=>{

  return(<div>
    <Part part={props.part1} exercise={props.exercises1}/>
    <Part part={props.part2} exercise={props.exercises2}/>
    <Part part={props.part3} exercise={props.exercises3}/>
  </div>)
}
const Total = (props) =>{
  return(<div>
    <p>
      number of exercises {props.sumExercises}
    </p>
  </div>)
}*/
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
    /*<>
      <Header course = {course}/> 
      <Content 
      part1={part1} 
      part2={part2}
      part3={part3}
      
      exercises1={exercises1}
      exercises2={exercises2}
      exercises3={exercises3}
      />
      <Total sumExercises={sumExercises}/>
    </>*/
    <>
      <h1>{course}</h1>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))