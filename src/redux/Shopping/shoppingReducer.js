import * as actionTypes from "./shoppingTypes";
import products from '../../data/data'

const INITIAL_STATE = {
  products: products,
  cart: [],
  currentItem: null,
  isSignedIn: null,
  userId: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + action.payload.amount }
                : item
            )
          : [...state.cart, { ...item, qty: action.payload.amount }],
      };

    case actionTypes.TAKEAWAY_FROM_CART:
      const takeawayItem = state.products.find(
        (product) => product.id === action.payload.id
      );
      const isInCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: isInCart
          && state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty - 1 }
                : item
            )
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.SIGN_IN:
      return {...state, isSignedIn: true, userId: action.payload};
    case actionTypes.SIGN_OUT:
      return {...state, isSignedIn: false, userId: null}
    default:
      return state;
  }
};

export default shopReducer;
