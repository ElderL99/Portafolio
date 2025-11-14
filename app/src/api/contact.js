import api from "./axios.js";

export const sendContactMessage = (data) => {
  return api.post("/conctat/send-email", data);
};
