import { styled } from "../../styles/stitches.config"

const Wrapper = styled("div", {
  width: "100%",
  margin: "auto",
  maxWidth: "$max",
  minWidth: "$l",

  variants: {
    border: {
      true: {
        border: "red solid $s",
      },
    },
    top: {
      true: {
        paddingTop: "$s",
        "@bp2": {
          paddingTop: "$xxxl",
        },
      },
    },
    xxxs: {
      true: {
        padding: "$xxxs",
      },
    },
    xxs: {
      true: {
        padding: "$xxs",
      },
    },
    xs: {
      true: {
        padding: "$xs",
      },
    },
    s: {
      true: {
        padding: "$s",
      },
    },
    m: {
      true: {
        padding: "$m",
      },
    },
    l: {
      true: {
        padding: "$l",
      },
    },
    xxl: {
      true: {
        padding: "$xxl",
      },
    },
    xxxl: {
      true: {
        padding: "$xxxl",
      },
    },
  },
})

export default (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}
