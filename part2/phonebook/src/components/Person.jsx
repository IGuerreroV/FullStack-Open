const Person = ({ personToShow }) => {
    return (
        <div>
            {
                personToShow.map(({ name, number}) => {
                    return (
                    <div key={name}>
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