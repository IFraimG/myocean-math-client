import React from "react"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/app/Header'
import { setAuthAction, setUserTokenAction } from './core/store/actions/auth'
import AuthAPI from './core/store/api/auth'
import { AppStateType } from './core/store/store'
import NotFound from './pages/404'
import HomePage from './pages/Home'
import LevelPage from './pages/Level'
import ProfilePage from './pages/Profile'

function App() {
  const dispatch = useDispatch()
  const { isLoader } = useSelector((state: AppStateType) => state.AuthReducer)

  useEffect(() => {
    AuthAPI.checkauth().then(res => {
      if (res.isAuth) dispatch(setUserTokenAction({email: res.email, id: res.id}))
      dispatch(setAuthAction(res.isAuth))
    })
  }, [])

  return (
    <Router>
      { !isLoader ? <Header /> : "" }
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/profile/:id">
          <ProfilePage />
        </Route>
        <Route path="/level">
          <LevelPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
