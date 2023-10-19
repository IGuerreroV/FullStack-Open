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
                    <StatisticsLine text='average' value={(average) / 3}/>
                    <StatisticsLine text='' value={good > 0 ? `positive ${(good / allClicks) * 100}%` : ''}/>
                </div>
            ) : (
                <p>No feedback give</p>
            )
            }
        </div>
    )

}

export default Statistics;