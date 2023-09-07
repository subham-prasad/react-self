import { restaurantList } from "../Config";
import RestaurantCard from "../RestaurantCard";
import { useState } from "react";

const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantList)

    const [searchText,setSearchText] = useState();

    function filterData(searchText, restaurants){
        const filterData = restaurants.filter((restaurant) => 
        restaurant.info.name.includes(searchText) )
        
        return filterData;
    }

    return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="search"
        value={searchText} 
        onChange={(e) => {
            setSearchText(e.target.value)
        }
        }/>
        <button className="search-btn"
        onClick={() =>{
        const data = filterData(searchText, restaurants);
        setRestaurants(data)}}>Search BTN </button>

      </div>
      <div className="restauartCards">
      {
        restaurants.map (restaurant => {
          return <RestaurantCard {...restaurant?.info} key={restaurant.info.id}/>
              })
      }      
      </div>
      </>
    )
  }

export default Body;