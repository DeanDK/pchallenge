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

export function addWine({ title, country, year }) {
  const request = axios
    .post(`${URL}/wines`, { title, country, year })
    .then(res => res.data);
  return { type: "GET_ADDED_WINE", payload: request };
}

export function deleteWine(id) {
  const request = axios.delete(`${URL}/wines/${id}`).then(res => res.data);
  return { type: "GET_DELETED_WINE", payload: request };
}

export function updateWine({ title, country, year, id }) {
  console.log(title, country, year, id);
  const request = axios
    .put(`${URL}/wines/${id}`, { title, country, year })
    .then(res => res.data);

  return { type: "GET_UPDATED_WINE", payload: request };
}
