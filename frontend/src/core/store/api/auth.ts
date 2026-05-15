import { SERVER_URLS } from "../../constants/urls";
import { UserTypes, UserLogin } from "./../interfaces/auth";
import axios from "axios";

const AuthAPI = {
  registration: async (user: UserTypes) => {
    try {
      let res = await axios.post(SERVER_URLS.URL_USER_CREATE, user);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  login: async (user: UserLogin) => {
    try {
      let res = await axios.post(SERVER_URLS.URL_USER_LOGIN, {
        email: user.email,
        password: user.password,
      });
      return res.data;
    } catch (error) {
      return error;
    }
  },
  checkauth: async () => {
    try {
      let token = localStorage.getItem("token");
      if (token == null) return { isAuth: false };

      let res = await axios.get(SERVER_URLS.URL_USER_AUTH_CHECK, {
        headers: { Authorization: "Bearer " + token },
      });
      return { ...res.data, isAuth: true };
    } catch (error) {
      console.log(error);
      return { isAuth: false };
    }
  },
  getFullData: async (userID: string) => {
    try {
      let res = await axios.get(`${SERVER_URLS.URL_USER_FULL_DATA}/${userID}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  getFinishedTasks: async (userID: string) => {
    try {
      let res = await axios.get(`${SERVER_URLS.URL_USER_FINISHED}/${userID}`)
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default AuthAPI;
