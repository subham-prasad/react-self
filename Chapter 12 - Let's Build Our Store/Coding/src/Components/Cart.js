import { useSelector } from "react-redux";
import FoodCard from "./FoodCard";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
 
  return (
    <>
    <h1>{cartItems.length}</h1>
    <div className="flex flex-wrap">
    {cartItems.map((foodInCart)=>{
      return(
      <FoodCard {...foodInCart?.card?.info}/>
      );  
    })}
    </div>
    
    </>
  )
};
export default Cart;
