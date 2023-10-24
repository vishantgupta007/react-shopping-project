import { Link } from "react-router-dom";
import "../../app.css";

// taking props from coming from the App.jsx to render the banner, categoryTitle and the products to be displayed to the respective pages

//from this logic data is rendered into men, women and kids page that common in all three of them

const Products = ({ products, category, categoryTitle, product_image }) => {
  // filtering out the category so that data of the respective gender can be rendered on their page

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  // mapping the filteredproducts to render the data

  const cardRender = filteredProducts.map((product) => {
    const { image, id, name, company, price } = product;
    return (
      <li key={id}>
        <div className="product_image">
          <img src={image} alt={name} />
        </div>
        <div className="card_desc">
          <h4>{company}</h4>
          <p>{name}</p>
          <span>
            <small className="product_price">₹{price}</small>
            <small className="off">-30% off</small>
          </span>
        </div>
        <div className="product_detail">
          {/*The link will take us to the the specific product so that we display the the product description  */}

          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      </li>
    );
  });

  return (
    <>
      <img src={product_image} alt="product-banner" className="banner" />
      <h1 className="card_main_title">{categoryTitle}</h1>
      <div className="card_container">{cardRender}</div>;
    </>
  );
};

export default Products;
