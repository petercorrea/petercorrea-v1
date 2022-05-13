import { styled } from "../../stitches.config"

const Box = styled("div", {
  display: "block",
  width: "100%",
  color: "black",

  variants: {
    row: {
      true: {
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
        "& > *": {
          height: "100%",
        },
      },
    },
    column: {
      true: {
        display: "flex",
        flexFlow: "column nowrap",
      },
    },
    right: {
      true: {
        justifyContent: "right",
        alignItems: "flex-end",
      },
    },
    left: {
      true: {
        justifyContent: "left",
        alignItems: "flex-start",
      },
    },
    "space-between": {
      true: {
        justifyContent: "space-between",
      },
    },
    "space-evenly": {
      true: {
        justifyContent: "space-evenly",
      },
    },
    full: {
      true: {
        "& > *": {
          flexBasis: "100%",
          width: "100%",
          minHeight: "content",
        },
      },
    },
    viewport: {
      true: {
        width: "100vw",
        height: "100vh",

        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    border: {
      true: {
        border: "solid red 2px",
      },
    },
    "border-child": {
      true: {
        "& > *": {
          border: "blue solid 2px",
        },
      },
    },
  },
})

export default (props) => {
  return <Box {...props}>{props.children}</Box>
}
