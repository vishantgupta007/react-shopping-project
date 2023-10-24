// import React from "react";
// import { Link } from "react-router-dom";
// import "./app.css";

// const CustomProduct = ({ categoryTitle, products }) => {
//   return (
//     <>
//       <h1 className="card_main_title">{categoryTitle}</h1>
//       <div className="card_container">
//         {products.map((product) => {
//           const { image, id, name, company, new_price } = product;
//           return (
//             <li key={id}>
//               <div className="product_image">
//                 <img src={image} alt={name} />
//               </div>
//               <div className="card_desc">
//                 <h4>{company}</h4>
//                 <p>{name}</p>
//                 <span>
//                   <small className="product_price">₹{new_price}</small>
//                   <small className="off">-30% off</small>
//                 </span>
//               </div>
//               <div className="product_detail">
//                 <Link to={`/product/${product.id}`}>View Details</Link>
//               </div>
//             </li>
//           );
//         })}
//       </div>
//       ;
//     </>
//   );
// };

// export default CustomProduct;

