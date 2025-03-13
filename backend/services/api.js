import axios from "axios";

const API_URL = "http://localhost:8080/api"; // Change this if using a different server

export const createUser = async (userData) => {
  return axios.post(`${API_URL}/users`, userData);
};

export const getUsers = async () => {
  return axios.get(`${API_URL}/users`);
};

export const getUserById = async (id) => {
  return axios.get(`${API_URL}/users/${id}`);
};

export const updateUser = async (id, updatedData) => {
  return axios.put(`${API_URL}/users/${id}`, updatedData);
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/users/${id}`);
};
