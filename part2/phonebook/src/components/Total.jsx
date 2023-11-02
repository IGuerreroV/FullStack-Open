const Total = ({ parts }) => {
    const totalExercises = parts.reduce((total, part) => total + part.exercises, 0)
    return <h3>Number of exercises: {totalExercises}</h3>
}

export default Total;