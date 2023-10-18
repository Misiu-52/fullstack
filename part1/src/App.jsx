const Header = (props) => {
  return (<h1>{props.course}</h1>)
}
const Content = (props) => {
  console.log(props);
  return <>{props.parts.map(elem => {
    return <p key={elem.name}>{elem.name} {elem.exercises}</p>
  })}</>
}
const Total = (props) => {
  console.log(props);
  return (<p>Number of exercises {props.number}</p>)
}
const App = () => {
  const course = {
    courseName: 'Half Stack application development',
    // count() {
    //   let sum = 0
    //   parts.forEach((elem) => {
    //     sum += elem.exercises
    //   })
    //   return sum
    // },
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
      <Header course={course.courseName} />
      <Content parts={course.parts} />
      {/* <Total number={course.count()} /> */}
    </div>
  )
}

export default App