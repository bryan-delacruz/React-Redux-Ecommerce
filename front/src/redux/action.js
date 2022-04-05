import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";

export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`/products`);
    console.log("PRODUCTS", "Se recibe los productos de la API");
    return dispatch({ type: GET_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProductbyId = (id) => async (dispatch) => {
  try {
    let { data } = await axios.get(`/products/${id}`);
    console.log("PRODUCT BY ID", "Se recibe el producto by id de la API");
    return dispatch({ type: GET_PRODUCT_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};
