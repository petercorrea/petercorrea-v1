import { createStitches, globalCss } from "@stitches/react"

export const globalStyles = globalCss({
  ":root": {
    "font-size": "16px"
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "arial"
  },
  body: {
    maxWidth: "100vw",
    minHeight: "fit-content",
    "overflow-x": "scroll",

    h2: {
      "font-size": "2.8rem"
    }
  }
})

export const { config, createTheme, css, getCssText, styled, theme } =
  createStitches({
    theme: {
      colors: {
        black: "#000000",
        gray500: "hsl(206,10%,76%)",
        blue500: "hsl(206,100%,50%)",
        purple500: "hsl(252,78%,60%)",
        green500: "hsl(148,60%,60%)",
        red500: "hsl(352,100%,62%)"
      },
      space: {
        1: "5px",
        2: "10px",
        3: "15px"
      },
      fontSizes: {
        1: "3rem",
        2: "2rem",
        3: "1rem"
      },
      fonts: {
        untitled: "Untitled Sans, apple-system, sans-serif",
        mono: "Söhne Mono, menlo, monospace"
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {},
      shadows: {},
      zIndices: {},
      transitions: {}
    }
  })
