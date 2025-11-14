import axios from "axios";

// instacia base

const api = axios.create({
  baseURL: "https://my-own-api-nrzr.onrender.com",
  timeout: 10000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
