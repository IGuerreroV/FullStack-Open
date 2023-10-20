import StatisticsLine from "./StatisticLine";

const  Statistics = ({ good, neutral, bad, allClicks, average}) => {
    return (
        <div>
            <h2>Statistics</h2>
            {allClicks > 0 ? (
                <div>
                    <StatisticsLine text='good' value={good}/>
                    <StatisticsLine text='neutral' value={neutral}/>
                    <StatisticsLine text='bad' value={bad}/>
                    <StatisticsLine text='all' value={allClicks}/>
                    <StatisticsLine text='average' value={((average) / 3).toFixed(1)}/>
                    <StatisticsLine text='positive' value={good > 0 ? `${((good / allClicks) * 100).toFixed(1)}%` : ''}/>
                </div>
            ) : (
                <p>No feedback give</p>
            )
            }
        </div>
    )

}

export default Statistics;