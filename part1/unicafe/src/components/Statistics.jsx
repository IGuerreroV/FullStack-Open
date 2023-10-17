const  Statistics = ({ good, neutral, bad, allClicks, average}) => {
    return(
        <div>
            <h2>Statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {allClicks}</p>
            <p>average {(average) / 3}</p>
            <p>{ good > 0 ? `positive ${(good / allClicks) * 100}%` : 'No hay comentarios buenos'}</p>
        </div>
    )
}

export default Statistics;