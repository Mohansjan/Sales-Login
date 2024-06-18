
import axios from 'axios';

const API_URL = 'https://dev-mohansjan.gateway.apiplatform.io/v1/login'; 
const apikey='ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
