import axiosApp from "../axios/axios";
import axios from "axios";
const REACT_APP_APP_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  return axios.get(`${REACT_APP_APP_URL}/posts`, {});
};

export const getPostDetails = (id) => {
  return axiosApp.get(`/posts/${id}`);
};
