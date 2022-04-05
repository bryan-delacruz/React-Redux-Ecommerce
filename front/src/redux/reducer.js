import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "./action";
const initialState = {
  products: [],
  productById: {},
  cart: [{ id: 1, cantidad: 2 },{ id: 2, cantidad: 3 }],
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
    default:
      return state;
  }
};

export default rootReducer;
