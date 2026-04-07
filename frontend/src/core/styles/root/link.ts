import { colorTheme } from './../../theme/colors';
import { makeStyles } from "@material-ui/core/styles"

export const fr_stylesLink = makeStyles({
  default: {
    color: "#fff",
    fontFamily: "GTRones",
    "&:hover": {
      textDecoration: "none"
    }
  }
})
