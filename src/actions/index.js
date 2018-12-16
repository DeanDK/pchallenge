import axios from "axios";
import { url, token } from "./../config/config.js";

export function getContacts() {
  const request = axios
    .get(`${url}?start=0&limit=10&api_token=${token}`)
    .then(res => res.data);
  return { type: "GET_CONTACTS", payload: request };
}
