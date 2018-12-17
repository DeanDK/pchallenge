import axios from "axios";
import { url, token } from "./../config/config.js";

export function getContacts(start = 0, limit = 8, list = "") {
  const request = axios
    .get(`${url}?start=${start}&limit=${limit}&api_token=${token}`)
    .then(response => {
      return response.data;
    });
  return { type: "GET_CONTACTS", payload: request };
}

export function getContactByName(name = "", start = 0) {
  const request = axios
    .get(`${url}/find?term=${name}&start=${start}&api_token=${token}`)
    .then(response => {
      return response.data;
    });

  return { type: "GET_CONTACTS", payload: request };
}

export function getContactInfo(id) {
  const request = axios
    .get(`${url}/${id}?api_token=${token}`)
    .then(response => {
      return response.data;
    });

  return { type: "GET_CONTACT_INFO", payload: request };
}
