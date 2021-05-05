import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, removeItem, setSort, sort}) {

  

  const itemCard = items.map(item => <ListingCard key={item.id} {...item} removeItem={removeItem}/>)
  

 
  const handleSort=()=>{
    setSort(sort=>!sort)
  }
  return (
    <main>
      <button onClick={handleSort}>{sort? "Sort by Default":"Sort By Location"} </button>
      <ul className="cards">
        {itemCard}
      </ul>
      
    </main>
  );
}

export default ListingsContainer;
