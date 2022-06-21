import axios from "axios";

const REACT_APP_APP_URL = process.env.REACT_APP_APP_URL;

const axiosApp = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axiosApp.interceptors.request.use((request) => console.log(request));

axiosApp.interceptors.response.use((response) => console.log(response));

export default axiosApp;
