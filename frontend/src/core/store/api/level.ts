import axios from "axios"

const LevelAPI = {
  getTasks: async () => {
    try {
      let res = await axios.get("https://myoceanmathserver.herokuapp.com/tasks/level")
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
  saveTasks: async (tasksList: any, userID: any) => {
    try {
      let res = await axios.put("https://myoceanmathserver.herokuapp.com/users/save", { tasksList, userID: userID.id })
    } catch (error) {
      console.log(error);
    }
  }
}

export default LevelAPI