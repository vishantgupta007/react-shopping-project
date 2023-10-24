import { NavLink } from "react-router-dom";
import { cards } from "../../data";
import "./ProductCard.css";

// importing the card data from the data folder and rendering the the product card of the respective gender and usind Navlink for navigating to the respective page

const ProductsCard = () => {
  return (
    <>
      <h1 className="card-title">
        BRANDS <span>IN-DEMAND</span>
      </h1>
      <div className="card-container">
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <NavLink to={card.path}>
                <img
                  src={card.url}
                  alt="festival & winter collection"
                  className="image-card"
                />
              </NavLink>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default ProductsCard;
