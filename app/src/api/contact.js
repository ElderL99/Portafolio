import api from "./axios.js";

export const sendContactMessage = (data) => {
  return api.post("/contact", data);
};
