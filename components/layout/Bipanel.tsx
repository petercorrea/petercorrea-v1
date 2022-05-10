import { styled } from "../../stitches.config"
import Box from "./Box"

const Bipanel = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignContent: "center",
  padding: "20px"
})

export default (props) => {
  return (
    <Bipanel>
      <Box column>
        <p>
          this is text aeg g g qewr werg qwerg qwergqwerg qwerg qwergq werg qweg
        </p>
        <p>
          this is text aeg g g qewr werg qwerg qwergqwerg qwerg qwergq werg qweg
        </p>
        <p>
          this is text aeg g g qewr werg qwerg qwergqwerg qwerg qwergq werg qweg
        </p>
      </Box>
      <Box column>
        <p>
          this is text aeg g g qewr werg qwerg qwergqwerg qwerg qwergq werg qweg
        </p>
        <p>
          this is text aeg g g qewr werg qwerg qwergqwerg qwerg qwergq werg qweg
        </p>
        <p>
          this is text aeg g g qewr werg qwerg qwergqwerg qwerg qwergq werg qweg
        </p>
      </Box>
    </Bipanel>
  )
}
