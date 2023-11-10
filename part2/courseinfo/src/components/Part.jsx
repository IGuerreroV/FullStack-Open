const Part = ({ name, part }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

export default Part;