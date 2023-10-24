import { useContext } from "react";
import { StoreContext } from "../../components/Context/StoreContext";
import CartProduct from "../../components/CartProduct/CartProduct";
import { cartImage } from "../../data";
import { Link } from "react-router-dom";
import "./Cart.css";
import { BsBagHeartFill } from "react-icons/bs";

// importing total, products, removeALL function from the context so that we pass it to fucntion

const Cart = () => {
  const { total, products, removeAll } = useContext(StoreContext);

  const handleRemoveAll = () => {
    removeAll();
  };

  // conditionally rendering the stuffs when the product is not addded and when a product is shown it total and clearcart button

  const productDisplay =
    products.length === 0 ? (
      <div className="cart_display">
        <img src={cartImage} alt="cart_image" />
        <h2>Your cart needs some love</h2>
        <p>Fill your cart with the best of Vastras</p>
        <Link to="/">Start Shopping</Link>
      </div>
    ) : (
      <div className="cart_price_total">
        <p>Total: ₹{total}</p>
        <button className="remove_all" onClick={handleRemoveAll}>
          Clear Cart
        </button>
      </div>
    );

  return (
    <>
      <h1 className="cart_title">
        Your Basket
        <span style={{ color: "#ff006e", paddingLeft: "15px" }}>
          <BsBagHeartFill />
        </span>
      </h1>
      {productDisplay}

      {/* mapping the products and showing through CartProduct component  and passing product as prop*/}

      {products.map((product) => {
        return <CartProduct key={product.id} item={product} />;
      })}
    </>
  );
};

export default Cart;
