const StatisticsLine = ({ text, value }) => {
    return(
        <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'center'}}>
            <tbody>
                <tr>
                    <td style={{padding: '3px'}}>{text}</td>
                    <td style={{ width:'50%'}}>{value}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default StatisticsLine;