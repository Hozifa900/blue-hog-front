import axios from "axios";

const BASE_URL = "https://zane-o.com/api/v1/orders";

const getOrders = () => {
  return axios.get(BASE_URL);
};

const addOrder = (payload: object) => {
  return axios.post(BASE_URL, payload);
};

export { getOrders, addOrder };
