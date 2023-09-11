 import { IMG_CDN_URL } from "../Config";


const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId, user }) => {

  // console.log(user);
  return (
    <div className="p-10">
      <img className="w-48"
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h1 className="text-[32px]">{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h3> {avgRating} Stars</h3>
      {/* <h4>{user.name}</h4> */}
      
    </div>
  );
};

export default RestaurantCard;
