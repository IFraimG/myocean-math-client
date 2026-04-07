import Alert from "@material-ui/lab/Alert"
import React from "react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { setModalAction } from "../core/store/actions/app"
import AuthAPI from "../core/store/api/auth"
import styles from "../core/styles/home/home.module.scss"
import screen from "/src/assets/screen.png"

const HomePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isLoader, setLoader] = useState<boolean>(false)

  useEffect(() => {
    setLoader(true)
    AuthAPI.checkauth().then(res => {
      if (res.isAuth) history.push("/profile/" + res.id)
      setLoader(false)
    })
  }, [])

  return <>
    {!isLoader ? (
      <div className={styles.home__wrapper}>
        <div className={styles.home}>
          <div className={styles.home__main}>
            <div className={styles.home__block__left}></div>
            <div className={styles.home__block__center}>
              <h1 className={styles.home__title}>Решайте задачи по математика в интерактивном формате !</h1>
              <div className={styles.home__content}>
                <img src={screen} alt=""/>
                <div className={styles.home__right}>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur explicabo magnam numquam illum accusamus deleniti nesciunt? Reiciendis dolore porro sunt, autem odit aliquid maiores cum voluptas repellat aperiam error ratione quisquam facere consequatur nulla totam. Cumque, tenetur, quo delectus dolor aspernatur iste quas dicta dignissimos blanditiis suscipit commodi! Reprehenderit quisquam temporibus distinctio veniam! Illum itaque est maxime vero ullam. Perferendis repellendus ullam, quidem odio veniam incidunt sunt nesciunt? Adipisci, nam. Aliquam perspiciatis maxime enim modi omnis voluptatibus id, illo suscipit?</p>
                  <Alert variant="filled" color="warning">Данный сайт находится в разработке !</Alert>
                  <button onClick={() => dispatch(setModalAction(true))} className={styles.home__auth}>Зарегистрироваться</button>
                </div>
              </div>
            </div>
            <div className={styles.home__block__right}></div>
          </div>
        </div>
      </div>
    ) : ""}
  </>
}

export default HomePage