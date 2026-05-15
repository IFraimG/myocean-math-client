import axios from "axios";
import { SERVER_URLS } from "../../constants/urls";

const LevelAPI = {
  getTasks: async () => {
    try {
      let res = await axios.get(`${SERVER_URLS.URL_GET_TASKS_LEVEL}`)
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  saveTasks: async (tasksList: any, userID: any) => {
    try {
      let res = await axios.put(SERVER_URLS.URL_USER_SAVE, {
        tasksList,
        userID: userID.id,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default LevelAPI;
