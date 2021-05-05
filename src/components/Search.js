import {useState} from "react";

// function Search({searchItem, setSearchItem}) {
function Search({handleSearch}){

  const [searchOneItem, setSearchOneItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(searchOneItem)
  }

  const searchText =(e)=>setSearchOneItem(e.target.value)

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchOneItem}
        onChange={searchText}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
