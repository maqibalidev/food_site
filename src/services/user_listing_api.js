import axios from "axios";
const API_URL=process.env.BACKEND_API_URL;
const API = axios.create({
  baseURL: API_URL,
  timeout: 50000,});

export const loginApi = (values) => {
  return API.post("login", values);
}
export const registerApi = (values) => {
  return API.post("register", values);
};
export const logoutApi = (token) => {
  return API.post(
    "logout",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const getProductsApi = () => {
  return API.get("products");
};
