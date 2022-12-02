

const App = () => {
  const Course = ({ course }) => {
    const Header = ({ course }) => <h1>{course}</h1>
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

  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App