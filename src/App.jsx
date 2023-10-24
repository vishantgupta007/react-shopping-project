import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Registration } from "./pages/register/Registration";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Productdetail from "./pages/ProductDetail/Productdetail";
import Cart from "./pages/Cartpage/Cart";
import { products } from "./data";
import Products from "./pages/Product/Products";
import StoreContextProvider from "./components/Context/StoreContext";
import ScrollToTop from "./components/ScrollToTop";
import { menBanner, womenBanner, kidsBanner } from "./data";

//  1 => Importing necessary imports from react-router-dom to navigate between pages through routes and route

// 2 => wrapping all the pages through StoreContextprovider to prevent prop drilling so that the function and be accessible by any component

// 3 => Importing all the pages and setting the path so the we go to them easly

// 4 =>  Passing products imported from data folder and passing them as props that is used by respective components

//  5 => impoting necessary images from data folder also passing them as props and categoryTitle for all pages

function App() {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/men"
            element={
              <Products
                products={products}
                category="men"
                categoryTitle="Men's Collection"
                product_image={menBanner}
              />
            }
          />
          <Route
            path="/women"
            element={
              <Products
                products={products}
                category="women"
                categoryTitle="Women's Collection"
                product_image={womenBanner}
              />
            }
          />
          <Route
            path="/kids"
            element={
              <Products
                products={products}
                category="kids"
                categoryTitle="Kids' Collection"
                product_image={kidsBanner}
              />
            }
          />
          <Route path="/product/:id" element={<Productdetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </StoreContextProvider>
  );
}

export default App;
