import { ImBin } from "react-icons/im";
import "./CartProduct.css";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { FaStar, FaRegStar } from "react-icons/fa";

// it takes item as the prop that is used to render the all products that are added to the cart page that is coming from CartPage

// importing remove function from storeContext from context

const CartProduct = ({ item }) => {
  const { removeFromBasket } = useContext(StoreContext);
  const stars = item.rating;

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index}>{stars >= index + 1 ? <FaStar /> : <FaRegStar />}</span>
    );
  });

  // handleremove function that takes removefrombasket that is taking specific item in which we click

  const handleRemove = () => {
    removeFromBasket(item);
  };

  // styling and remdering of the products that are added into the cart page

  return (
    <>
      <div className="basket_container">
        <div className="basket_image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="bakset_product_desc">
          <h3>{item.company}</h3>
          <p>{item.name}</p>
        </div>
        <div className="ratingStar">{ratingStar}</div>

        <p className="basket_price">₹{item.price}</p>
        <span className="remove_item">
          <ImBin onClick={handleRemove} />
        </span>
      </div>
    </>
  );
};

export default CartProduct;
