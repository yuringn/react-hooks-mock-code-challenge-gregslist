import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [allItems, setAllItems] = useState([])
  const [sort, setSort] = useState(false)

  //either do this way dynamic search without submit 🔍 button
  // const [searchItem, setSearchItem] = useState("")

  const [search, setSearch] = useState("")
  const handleSearch=(newSearch)=>setSearch(newSearch)

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(resp=>resp.json())
    .then(setAllItems)
  },[])

  const removeItem = (itemId)=>{
    const remove = allItems.filter(item => item.id !==itemId)
    setAllItems(remove)
  }
  //dynamic way: .includes(searchItem.toLowerCase())

  const filterSearch=allItems.filter(item => item.description.toLowerCase().includes(search.toLowerCase()))

  const sortByLocation = sort ? [...filterSearch].sort((itemA, itemB)=>itemA.location.localeCompare(itemB.location))
  : [...filterSearch].sort((itemA,itemB)=> itemA.id - itemB.id)
    
  return (
    <div className="app">
      {/* dynamic search  */}
      {/* <Header searchItem={searchItem} setSearchItem={setSearchItem} /> */}
      <Header handleSearch={handleSearch} />
      <ListingsContainer items={sortByLocation} removeItem={removeItem} setSort={setSort} sort={sort}/>
    </div>
  );
}

export default App;
