import React from "react"
import Link from '@material-ui/core/Link';
import { fr_stylesLink } from "../../core/styles/root/link";

const FRlink = ({ children, href }: any) => {
  const styles = fr_stylesLink()
  return <Link className={styles.default} href={href}>{ children }</Link>
}

export default FRlink