import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const timeout = Number(process.env.NEXT_PUBLIC_API_TIMEOUT ?? "10000");

if (!baseURL) {
  console.warn(
    "NEXT_PUBLIC_API_BASE_URL no está definida, se usará el valor por defecto."
  );
}

const api = axios.create({
  baseURL: baseURL || "https://my-own-api-nrzr.onrender.com",
  timeout,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
