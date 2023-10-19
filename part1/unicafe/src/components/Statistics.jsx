const  Statistics = ({ good, neutral, bad, allClicks, average}) => {
    return (
        <div>
            <h2>Statistics</h2>
            {allClicks > 0 ? (
                <div>
                    <p>good {good}</p>
                    <p>neutral {neutral}</p>
                    <p>bad {bad}</p>
                    <p>all {allClicks}</p>
                    <p>average {(average) / 3}</p>
                    <p>{good > 0 ? `positive ${(good / allClicks) * 100}%` : ''}</p>
                </div>
            ) : (
                <p>No feedback give</p>
            )
            }
        </div>
    )

}

export default Statistics;