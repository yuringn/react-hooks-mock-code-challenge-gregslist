import {useState} from "react";

function ListingCard({id, description, location, image, removeItem}) {

  const [favorite, setFavorite] = useState(false)

  const handleClick=()=>setFavorite(fav=>!fav)
  
  const handleRemove=()=>{
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    })
    removeItem(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleRemove} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
