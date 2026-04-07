import { colorTheme } from './../../theme/colors';
import { makeStyles } from "@material-ui/core/styles"

export const fr_stylesModal = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    color: "#000",
    outline: "none",
    border: "none",
    width: "800px",
  },
  cardImageBackground: {
    color: "#000",
    outline: "none",
    border: "none",
    width: "1200px",
    padding: "20px"
  },
  cardImage: {
    maxWidth: "1150px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "50px 0",
  },
  showPassword: {
    display: "flex",
    justifyContent: "flex-end"
  },
  text: {
    fontFamily: "Segoe Print"
  }
})
