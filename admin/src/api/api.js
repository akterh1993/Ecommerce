import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.106:4000/api",
});
export default api;
