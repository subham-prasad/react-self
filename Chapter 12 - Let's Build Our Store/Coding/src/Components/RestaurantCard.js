 import { IMG_CDN_URL } from "../Config";


const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {

 
  return (
    <div className=" w-52 m-3 bg-pink-500 text-center break-words ">
      <img className="w-52"
        src={ 
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h1 className="text-lg">{name}</h1>
      <h2 className="">{cuisines.join(", ")}</h2>
      <h3 > {avgRating} Stars</h3>
      
    </div>
  );
};

export default RestaurantCard;
