const PersonForm = ({
    newName,
    addName,
    handleNameChange,
    handleNumberChange,
    newNumber,
    updateNumber,
}) => {
    return (
        <form onSubmit={addName}>
            <div>
            name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
            number: <input value={newNumber} name='number' onChange={handleNumberChange} />
            </div>
            <div>
            <button type='submit'>add</button>
            </div>
        </form>
    )
}

export default PersonForm;