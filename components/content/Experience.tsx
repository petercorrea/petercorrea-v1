import content from "../../constants/content.json"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"
import Bullets from "../ui/Bullets"
import Image from "../ui/Image"
import Tags from "../ui/Tags"

const Wrapper = styled(Box, {
  marginBottom: "$xl",
  display: "flex",
  "flex-direction": "row",
  "align-items": "flex-start",
  h3: {
    color: "$black",
  },
  h6: {
    marginBottom: "$s",
  },

  "@bp1": {
    "flex-direction": "column",
  },
  "@bp2": { "flex-direction": "column" },
  "@bp3": { "flex-direction": "column" },
})

const Column = styled("div", {
  minWidth: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flexBasis: "80%",
})

const CompanyTitle = styled(Box, {
  // border: "red solid 1px",
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "flex-end",
  justifyContent: "space-between",
  marginBottom: "$s",
  "& > *": {
    // marginRight: "$l",
  },
})

const ImageContainer = styled(Box, {
  position: "relative",
  width: "100px",
  height: "50px",
})

export default () => {
  const items = content.experience
  const html = []

  // generate each row
  for (const idx in items) {
    html.push(
      <Wrapper key={idx}>
        <Column>
          <CompanyTitle>
            <h3>{items[idx].title}</h3>
            {items[idx].logo ? (
              <ImageContainer>
                <Image
                  src={items[idx].logo}
                  objectFit="contain"
                  // size="m"
                  alt="logo"
                ></Image>
              </ImageContainer>
            ) : (
              ""
            )}
          </CompanyTitle>
          <Tags list={items[idx].skills} blue />
        </Column>

        <Box column>
          <h6>{items[idx].team}</h6>
          <Bullets items={items[idx]["bullet-points"]}></Bullets>
        </Box>
      </Wrapper>
    )
  }

  return (
    <Padding id="experience" l>
      <Box column>
        <h1>work</h1>
        {html}
      </Box>
    </Padding>
  )
}
