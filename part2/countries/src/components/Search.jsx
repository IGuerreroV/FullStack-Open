const Search = ({ filter, handleFilter }) => {
    return (
        <div>
            Find countries <input placeholder="write a countrie" onChange={handleFilter} value={filter}/>
        </div>
    )
}

export default Search;