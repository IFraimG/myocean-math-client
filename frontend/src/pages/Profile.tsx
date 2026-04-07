import  { useEffect } from "react"
import { useDispatch } from "react-redux"
import Profile from "../components/profile/Profile"
import { setAuthAction, setUserTokenAction } from "../core/store/actions/auth"
import AuthAPI from "../core/store/api/auth"
import { getFinishedTasksThunk } from "../core/store/reducers/auth"
import React from "react"
const ProfilePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    AuthAPI.checkauth().then(res => {
      if (res.isAuth) {
        dispatch(setUserTokenAction({email: res.email, id: res.id}))
        dispatch(getFinishedTasksThunk(res.id))
      }
      dispatch(setAuthAction(res.isAuth))
    })
  }, [])
  
  return <Profile />
}

export default ProfilePage