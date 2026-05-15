import axios from 'axios';
import { SERVER_URLS } from '../constants/urls';

export const login = async (email: string, password: string) => {
  const response = await axios.post(SERVER_URLS.URL_USER_LOGIN, { email, password });
  return response.data;
};

export const checkAuth = async (token: string) => {
  const response = await axios.get(SERVER_URLS.URL_USER_AUTH_CHECK, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};