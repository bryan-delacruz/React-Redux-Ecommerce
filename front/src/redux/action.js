import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`/products`);
    console.log("PRODUCTS", "Se recibe los productos de la API");
    return dispatch({ type: GET_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};