import axios from "axios";
const URL = "http://localhost:3004";

export function getAllWines() {
  const request = axios.get(`${URL}/wines`).then(res => res.data);
  return { type: "GET_WINES", payload: request };
}

export function getWine(id) {
  const request = axios.get(`${URL}/wines/${id}`).then(res => res.data);
  return { type: "GET_WINE", payload: request };
}
