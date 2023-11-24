const Person = ({ personToShow, handleDelete }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {
                personToShow.map(({ name, number, id}) => {
                    return (
                        <div key={id}>
                            <ul>
                                <span>{name} {number}</span>
                                <button onClick={() => handleDelete(id, name)}>X</button>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Person;