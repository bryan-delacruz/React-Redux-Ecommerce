import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "./action";
const initialState = {
  products: [],
  productById: {},
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
