import { colorTheme } from './../../theme/colors';
import { makeStyles } from "@material-ui/core/styles"

export const fr_stylesButton = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: "#fff",
    backgroundColor: colorTheme.green,
    fontSize: "12px",
    fontWeight: "bold",
    padding: '20px',
    overflow: "hidden",
    minWidth: "120px",
    height: "40px",
    lineHeight: "20px",
    "&:hover": {
      backgroundColor: colorTheme.lightGreen,
    }
  },
  home: {
    background: "rgba(124, 186, 114, 1)",
    borderTop: "2px solid #000",
    borderRight: "2px solid #000",
    borderLeft: "2px solid #000",
    borderBottom: "4px solid #000",
    padding: "20px 40px",
    cursor: "pointer",
    borderRadius: "35px",
    fontSize: "20px",
    "&:focus": {
      outline: "none"
    },
    "&:active": {
      borderTop: "4px solid #000",
      borderBottom: "2px solid #000",
    }
  }
})