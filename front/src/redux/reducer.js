import {
  ADD_PRODUCT,
  DECREASE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
} from "./action";
const initialState = {
  products: [],
  productById: {},
  cart: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: payload,
      };
    }
    case GET_PRODUCT_BY_ID: {
      return {
        ...state,
        productById: payload,
      };
    }
    case ADD_PRODUCT: {
      if (state.cart.length > 0 && state.cart?.find((e) => e.id === payload)) {
        return {
          ...state,
          cart: state.cart.map((e) => {
            if (e.id === payload) {
              e.cantidad++;
            }
            return e;
          }),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { id: payload, cantidad: 1 }],
        };
      }
    }
    case DECREASE_PRODUCT: {
      if (state.cart.find((e) => e.id === payload).cantidad > 1) {
        return {
          ...state,
          cart: state.cart.map((e) => {
            if (e.id === payload) {
              e.cantidad--;
            }
            return e;
          }),
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((e) => e.id !== payload),
        };
      }
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        cart: state.cart.filter((e) => e.id !== payload),
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
