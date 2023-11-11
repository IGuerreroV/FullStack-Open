const Person = ({ persons }) => {
    return (
        <div>
            {
                persons.map(person => {
                    return (
                    <div key={person.name}>
                        <p>{person.name}</p>
                        <p>{person.number}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Person;