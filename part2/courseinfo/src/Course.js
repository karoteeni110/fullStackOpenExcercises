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

export default Course