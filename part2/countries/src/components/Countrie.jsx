const Countrie = ({ name, capital, population, languages, flags}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>capital {capital}</p>
            <p>population {population}</p>
            <h3>languages</h3>
            <ul>
                {
                    Object.values(languages).map((language) => (
                        <li key={language} style={{textAlign:"left"}}>{language}</li>
                    ))
                }
            </ul>
            <img src={flags} alt={name} />
        </div>
    )
}

export default Countrie;