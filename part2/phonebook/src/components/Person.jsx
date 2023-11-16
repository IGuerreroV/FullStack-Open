const Person = ({ personToShow }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {
                personToShow.map(({ name, number, id}) => {
                    return (
                    <div key={id}>
                        <p>{name}</p>
                        <p>{number}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Person;