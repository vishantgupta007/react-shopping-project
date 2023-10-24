// initialising the action and can exported to the respetive logic

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM ";
export const UPDATE_TOTAL = "UPDATE_TOTAL";
export const REMOVE_ALL = "REMOVE_ALL";

// inititalState that  stores total and prodducts 
 
export const initialState = {
  total: 0,
  products: [],
};

// storeReducer is the pure reducer function that state and action as it params and different actions are passed using switch statement and returning the previous state and action.payload that stores additional info about the actio type and setting the default if none of the actions is performed it throws the error

const storeReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        products: action.payload,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        products: action.payload,
      };
    case UPDATE_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case REMOVE_ALL:
      return {
        ...state,
        total: 0,
        products: [],
      };

    default:
      throw Error("cannot match the case");
  }
};

export default storeReducer;
