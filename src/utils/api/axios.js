import axios from "axios";

const baseUrl = "https://airtimetocash.herokuapp.com";
// const baseUrl = "http://localhost:4000";

export const apiGet = (path, conf = {}, auth = true) => {
  const config = {
    ...conf,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios.get(`${baseUrl}${path}`, config);
};

export const apiPost = (path, data, conf = {}, auth = true) => {
  const config = {
    ...conf,

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios.post(`${baseUrl}${path}`, data, config);
};

export const apiPut = (path, data, conf = {}, auth = true) => {
  const config = {
    ...conf,

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios.put(`${baseUrl}${path}`, data, config);
};

export const apiDelete = (path, conf = {}, auth = true) => {
  const config = {
    ...conf,

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios.delete(`${baseUrl}${path}`, config);
};

export const apiPatch = (path, data, conf = {}, auth = true) => {
  const config = {
    ...conf,

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios.patch(`${baseUrl}${path}`, data, config);
};
