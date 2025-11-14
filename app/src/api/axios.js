import axios from "axios";

// instacia base

const api = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 10000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
