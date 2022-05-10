import { css } from "@stitches/core"
import Box from "./Box"

const style = css({
  maxWidth: "1000px",
  margin: "auto"
})

export default (props) => {
  return <Box class={style()}>{props.children}</Box>
}
