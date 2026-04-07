import React from "react"
import Button from "@material-ui/core/Button"
import { fr_stylesButton } from "../../core/styles/root/button"

export interface FRbuttonInterface {
  color?: string,
  children: any,
  onClick?: () => void
}
const FRbutton: React.FC<FRbuttonInterface> = ({ children, color = "root", onClick }, props) => {
  const styles = fr_stylesButton()
  const currentStyles = styles[color]

  return <Button onClick={onClick} {...props} className={currentStyles}>{ children }</Button>
}

export default FRbutton