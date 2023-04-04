import axios from "axios";

const API_KEY = '$2b$10$m6V.W17j31fCMAo0AKwNk.6eDPO2YPelrda/pnjhxOWvHeXlGE.PO';

export const apiClient = axios.create({
  baseURL: "http://localhost:3000",

  withCredentials: false,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
