const Notification = ({ content, status }) => {

    const style ={
        color: status === 'ok' ? 'green' : 'red',
        background: 'lightgray',
        fontSize: 20,
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    if ( content ) {
        return <div style={style}>
        {content}
        </div>
    } else {
        return null
    }
}

export default Notification