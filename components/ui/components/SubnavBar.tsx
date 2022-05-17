import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"

const SubnavBar = styled(Box, {
  width: "min-content"
})

export default () => {
  return <SubnavBar row></SubnavBar>
}
