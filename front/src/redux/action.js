import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DECREASE_PRODUCT = "DECREASE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const SET_CART = "SET_CART";

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

export const addProduct = (id) => {
  return { type: ADD_PRODUCT, payload: id };
};
export const decreaseProduct = (id) => {
  return { type: DECREASE_PRODUCT, payload: id };
};
export const deleteProduct = (id) => {
  return { type: DELETE_PRODUCT, payload: id };
};

export const addToCart = (id, cantidad) => {
  return { type: ADD_TO_CART, payload: { id, cantidad } };
};

export const setCartLocalStorage = (cart) => {
  return { type: SET_CART, payload: cart };
};
