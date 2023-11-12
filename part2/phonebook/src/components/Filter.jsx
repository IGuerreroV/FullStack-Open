const Filter = ({ handleFilter }) => {
    return (
        <div>
            filter shown with <input placeholder='enter the name' onChange={handleFilter} />
        </div>
    )
}

export default Filter;