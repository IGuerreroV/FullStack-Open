import './App.css'

const Header = ({ course }) => {
  console.log(course)
  return(
      <div>
          <h1>{course}</h1>
      </div>
  )
}

const Content = ({ parts }) => {
  console.log(parts);
  return(
    <div>
      {
        parts.map(part => (
          <Part
          key={part.id}
          part={part}
          />
        ))
      }
    </div>
  )
}

const Part = ({ part }) => {
  console.log(part);
  return(
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0)
  return(
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
