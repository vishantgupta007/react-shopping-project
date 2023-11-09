import { useParams } from "react-router-dom";
import { products } from "../../data";
import "./ProductDetail.css";
import { useContext, useState } from "react";
import { StoreContext } from "../../components/Context/StoreContext";
import { fastDelivery, freeShip, returnDelivery } from "../../data";

// 1 => using useParams so that we can get the id of the specific product that can lead me to the product description page

// 2 => ussing useState so that after clicking that the addTocart it showa that the product is already in the cart.

// 3 => importing addToBakset from the CntextStore where all the logic os stored

const Productdetail = () => {
  const [inCart, setInCart] = useState(false);
  const { addToBasket } = useContext(StoreContext);

  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  // destructuing the product taking the respective data from the productd that is importing from the data folder

  const { image, name, old_price, price, company } = product;

  const handleAdd = () => {
    addToBasket(product);
    setInCart(true);
  };

  return (
    <>
      <div className="single_product_container">
        <div className="single_product_img">
          <img src={image} alt={name} />
        </div>
        <div className="single_product_desc">
          <div className="single_product_name">
            <h1>{company}</h1>
            <p>{name}</p>
          </div>
          <div className="single_product_price">
            <span>MRP &nbsp; ₹{price}</span>
            <div>
              <span style={{ color: "rgba(49, 41,41, 0.5)" }}>
                ₹ {old_price}
              </span>
              <small
                style={{ color: "red", fontSize: "15px", fontWeight: "500" }}
              >
                &nbsp; &nbsp; -30% off
              </small>
            </div>
            <span>Include all taxes</span>
            <img src={image} alt={name} />
          </div>
          <div className="product_delivery">
            <div className="free_deli">
              <img src={freeShip} alt="return-item" />
              <p>Free Shipment </p>
            </div>
            <div className="fast_deli">
              <img src={fastDelivery} />
              <p>Instant Delivery</p>
            </div>
            <div>
              <img src={returnDelivery} />
              <p>10 days return policy</p>
            </div>
          </div>

          {/* conditionally rndering the if the addtocartis clicked is shows that the product is already in teh cart */}

          {inCart ? (
            <button disabled={inCart} className="cart_btn">
              In Cart
            </button>
          ) : (
            <button type="submit" className="cart_btn" onClick={handleAdd}>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Productdetail;
