import axios from "axios";
const URL = "http://localhost:3004";

export function getAllWines() {
  const request = axios.get(`${URL}/wines`).then(res => res.data);
  return { type: "GET_WINES", payload: request };
}
