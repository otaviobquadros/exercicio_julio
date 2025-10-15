import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export async function getUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users?page=2`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createUser(data: { name: string; job: string }) {
  try {
    const response = await axios.post(`${BASE_URL}/users`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserPut(id: number, data: { name: string; job: string }) {
  try {
    const response = await axios.put(`${BASE_URL}/users/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserPatch(id: number, data: { name?: string; job?: string }) {
  try {
    const response = await axios.patch(`${BASE_URL}/users/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteUser(id: number) {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    return response.status === 204; // true if deleted
  } catch (error) {
    throw error;
  }
}