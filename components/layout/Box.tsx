import { styled } from "../../stitches.config"

const Box = styled("div", {
  width: "100%",
  color: "$black",

  variants: {
    hide: {
      true: {
        display: "none",
      },
    },
    row: {
      true: {
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
      },
    },
    column: {
      true: {
        display: "flex",
        flexFlow: "column nowrap",
      },
    },
    left: {
      true: {
        justifyContent: "left",
        alignItems: "flex-start",
      },
    },
    center: {
      true: {
        justifyContent: "center",
        alignItems: "center",
      },
    },
    right: {
      true: {
        justifyContent: "right",
        alignItems: "flex-end",
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
        "@bp1": {
          border: "$border-red",
        },
        "@bp2": {
          border: "$border-yellow",
        },
        "@bp3": {
          border: "$border-green",
        },
      },
    },
    "border-child": {
      true: {
        "& > *": {
          border: "$border-red",
        },
      },
    },
    bg: {
      true: {
        backgroundColor: "$bg",
      },
    },
  },
})

export default (props) => {
  return <Box {...props}>{props.children}</Box>
}
