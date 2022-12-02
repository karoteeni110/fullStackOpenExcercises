

const App = () => {
  const Course = ({ course }) => {
    const Header = ({ course }) => <h2>{course}</h2>
    const Content = ({ parts }) => {
      const Part = ({ part }) => <p> {part.name} {part.exercises} </p>
      return (
        <div>
          {parts.map(part => <Part part={part} />)}
        </div>
      )
    }
    const Total = ({ parts }) =>
      <p>
        <b>
          total of {parts.reduce((prevSum, part) => prevSum + part.exercises, 0)} exercises
        </b>
      </p>
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map( course => <Course course={course}/>)}
    </div>
  )
}

export default App