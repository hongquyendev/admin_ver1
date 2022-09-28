import axios from "axios";
import { store } from "..";
import {
  batLoandingAction,
  tatLoandingAction,
} from "../Redux/Actions/spinnerAction";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NzExMDQwMDAwMCIsIm5iZiI6MTY0ODQwMDQwMCwiZXhwIjoxNjc3MjU4MDAwfQ.0byoDjBIIS6877xg7NwEnO16v5HOltI9AatD9OLB0Ys";

export let https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft: TOKEN_CYBER,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    store.dispatch(batLoandingAction());
    console.log("yes https");
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    store.dispatch(tatLoandingAction());
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    store.dispatch(tatLoandingAction());

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
