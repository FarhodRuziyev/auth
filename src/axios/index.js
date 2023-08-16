import axios from "axios";

export const instance = axios.create({
  //   baseURL: "https://fakestoreapi.com/",
  baseURL: "https://crudcrud.com/api/3f442217c95d42e4bd38d5c48585b737/",
  timeout: 10000,
});
