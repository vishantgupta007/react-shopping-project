import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import "./Navbar.css";
import { BsBasket } from "react-icons/bs";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const Navbar = () => {
  const { products } = useContext(StoreContext);

  // The navbar that has two section =>
  // section 1 has the logo and bunch of logos that take you to the required pages =
  // section 2 has the navbar that shows the different pages of men women and kids and cartIcon that takes you to the cart page
  //  another is importing bunch of icons from react-icons

  return (
    <div className="section">
      <div className="section-1">
        <Link to="/">
          <img
            src="https://thevastra.in/cdn/shop/files/IMG_20230801_011315.jpg?v=1690832622&width=230"
            alt="company-logo"
          />
        </Link>
        <div className="icons">
          <span>
            <a href="https://www.facebook.com" target="_blank">
              <FiFacebook />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com" target="_blank">
              <FiInstagram />
            </a>
          </span>
          <span>
            <a href="https://www.twitter.com" target="_blank">
              <RiTwitterXFill />
            </a>
          </span>
          <span>
            <a href="https://www.google.com" target="_blank">
              <AiOutlineGoogle />
            </a>
          </span>
        </div>
      </div>
      {/* </div> */}
      <ul>
        {/* importing links data from data folder and mapping it to render the navbar options that takes you to the particular pages for navigating Link and Navlink is used from react-router-dom   */}

        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <NavLink to="/cart">
        <span className="login">
          <BsBasket />
          <span className="login_digit">
          
            {/* showing the number of products added into the cart dynamically that is importing from context folder */}

            {products.length === 0 ? null : products.length}
          </span>
        </span>
      </NavLink>
    </div>
  );
};

export default Navbar;


