import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();

  
  const restaurantsDetails = useRestaurant(id);
  

  return !restaurantsDetails ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant id: {id}</h1>
        <img className="h-11"
          src={
            IMG_CDN_URL +
            restaurantsDetails?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h1 className="text-6xl">Name: {restaurantsDetails?.cards[0]?.card?.card?.info?.name}</h1>
        <h2>{restaurantsDetails?.cards[0]?.card?.card?.info?.city}</h2>
        <h2>{restaurantsDetails?.cards[0]?.card?.card?.info?.locality}</h2>
      </div>
      <div>
        <h1> MEnu</h1>

        <ul>
          {Object.values(
            restaurantsDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards
          )?.map((category) => (
            <li >
              {category?.card?.card?.title}
              <ul>
                {category?.card?.card?.itemCards?.map((item) => (
                  <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
