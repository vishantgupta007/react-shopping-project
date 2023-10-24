// importig all the necessary actions from the reducer function

import { createContext, useReducer } from "react";
import storeReducer, {
  ADD_ITEM,
  REMOVE_ALL,
  REMOVE_ITEM,
  UPDATE_TOTAL,
  initialState,
} from "./reducer";

// creating the storeContext that takes children as props that all the functions so that it can be taken by any component instead of proping it to the each component

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  // calling uyseReducer function that destructered it array storing state and dispatch and calling storeReducer and initalState as its arguement
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // addToBasket that takes the specific property and it to the cart and updatedBasket thatc pushes the products into to the basket and updateTotal that updates the total after adding it or removing it

  const addToBasket = (product) => {
    let updatedBasket = state.products;
    updatedBasket.push(product);

    updateTotal(updatedBasket);

    // passing dispatch function that takes type of add_item and payload that stores updateBasket

    dispatch({
      type: ADD_ITEM,
      payload: updatedBasket,
    });
  };

  // removing the the product from the cart by filtering out the product whose id matches with currrent product that is filtrerd if it matches it removes the product

  const removeFromBasket = (product) => {
    let updatedBasket = state.products.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    updateTotal(updatedBasket);

    // passing dispatch function that takes type of adremove_item and payload that stores updateBasket

    dispatch({
      type: REMOVE_ITEM,
      payload: updatedBasket,
    });
  };

  // updateTotal function that triggeres everytime we add or remove the product

  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });

    dispatch({
      type: UPDATE_TOTAL,
      payload: total,
    });
  };

  // remove_all function that removes all the stored product that empty's the products array and change total back to 0

  const removeAll = () => {
    dispatch({
      type: REMOVE_ALL,
    });
  };
  return (
    // Store Provider that wrappes all the components that takes the values that can be passed it to any component

    <StoreContext.Provider
      value={{
        total: state.total,
        products: state.products,
        addToBasket,
        removeFromBasket,
        removeAll,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
