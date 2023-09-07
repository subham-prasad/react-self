import { IMG_CDN_URL } from "./Config";


const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h3> {avgRating} Stars</h3>
    </div>
  );
};

export default RestaurantCard;
