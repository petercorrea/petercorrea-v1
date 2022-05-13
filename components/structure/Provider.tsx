import { globalStyles } from "../../stitches.config"
import { createContext, useContext } from "react"
import { AppContextWrapper } from "../../context/AppContext"

export default (props) => {
  globalStyles()
  return <AppContextWrapper {...props}>{props.children}</AppContextWrapper>
}
