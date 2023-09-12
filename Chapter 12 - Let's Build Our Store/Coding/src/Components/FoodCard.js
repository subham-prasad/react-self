import { IMG_CDN_URL } from "../Config";

const FoodCard = ({name, imageId}) => {
    // console.log(foodInCart)
  return (
  <div className="w-52 m-7 text-center bg-pink-300">
    <img src={ 
          IMG_CDN_URL + imageId
        } />
  <h1>Name: {name}</h1>
  </div>
  )
};

export default FoodCard;
