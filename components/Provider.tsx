import { globalStyles } from "../stitches.config"

export default (props) => {
  globalStyles()
  return <div>{props.children}</div>
}
