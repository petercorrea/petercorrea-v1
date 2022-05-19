import { globalStyles } from "../styles/stitches.config"
import { AppContextWrapper } from "./AppContext"

export default (props) => {
  globalStyles()
  return <AppContextWrapper {...props}>{props.children}</AppContextWrapper>
}
