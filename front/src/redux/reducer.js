import { GET_PRODUCTS } from "./action";
const initialState = {
  products: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
