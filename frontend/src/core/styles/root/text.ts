import { colorTheme } from './../../theme/colors';
import { makeStyles } from "@material-ui/core/styles"

export const fr_stylesText = makeStyles({
  tasks: {
    fontFamily: "Verdana",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    color: "#000",
    fontStyle: "italic"
  },
  title: {
    fontFamily: "GTrones",
    fontSize: "24px",
    lineHeight: "20px",
    letterSpacing: "1px",
    textAlign: "center",
    marginTop: "50px"
  },
  alert: {
    fontSize: "24px", 
    marginTop: "30px", 
    textAlign: "center"
  }
})