import { useState, useEffect } from "react";

const useRestaurant = (id) =>{

    const [restaurantsDetails, setRestaurantsDetails] = useState(null);

    // Set data from API
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=" +
            id +
            "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json.data);
        setRestaurantsDetails(json.data);
      }

      // Return Restaurant Data
      return restaurantsDetails;
}

export default useRestaurant;