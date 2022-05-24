import content from "../../constants/content.json"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Href from "../ui/Href"

const ContactBar = styled("div", {
  ul: {
    width: "100%",
    display: "flex",
    flexDirection: "row",

    li: {
      display: "block",
      marginRight: "$l",
    },
  },
})

export default () => {
  return (
    <ContactBar>
      <Box row>
        <ul>
          <li key="ContactBar_0">
            <Href href={content.links.github}>
              <p>github</p>
            </Href>
          </li>
          <li key="ContactBar_1">
            <Href href={content.links.in}>
              <p>linkedin</p>
            </Href>
          </li>
          <li key="ContactBar_2">
            <Href href={content.links.email}>
              <p>email</p>
            </Href>
          </li>
          <li key="ContactBar_3">
            <Href href={content.assets.resume} download width={30} height={30}>
              <p>download_CV</p>
            </Href>
          </li>
        </ul>
      </Box>
    </ContactBar>
  )
}
