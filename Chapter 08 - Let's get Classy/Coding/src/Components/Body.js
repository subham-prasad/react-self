import { restaurantList } from "../Config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
  restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = ({user}) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
   
  useEffect(() => {
    getRestaurants();
  
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // const online = useOnline();

  // if(!online){
  //   return <h1>Please check YOur internet Connection</h1>
  // }

  if(!allRestaurants) return null;


  
  
  return (allRestaurants.length === 0) ? <Shimmer /> :(
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-lists">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to ={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard {...restaurant?.info}  user = {user} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
