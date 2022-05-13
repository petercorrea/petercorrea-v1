import { createStitches, globalCss } from "@stitches/react"

export const { config, createTheme, css, getCssText, styled, theme } =
  createStitches({
    theme: {
      colors: {
        white: "#F0EDEE",
        black: "#000000",
        charcoal: "#2F2F2F",
        gray: "#A4A4A4",
        red: "#9B0606",
        green: "#72ECB8",
        blue: "#38B9F5",
        yellow: "#FFE176",
        magenta: "#D077D3",
        cyan: "#1ADBE6",
      },
      space: {
        xs: "5px",
        s: "10px",
        m: "15px",
        l: "20px",
        xl: "40px",
        sectionPadding: "100px",
      },
      fontSizes: {
        xl: "3rem",
        l: "2rem",
        m: "1rem",
        s: ".8rem",
        xs: ".6rem",
      },
      fonts: {
        untitled: "Untitled Sans, apple-system, sans-serif",
        mono: "Söhne Mono, menlo, monospace",
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
      transitions: {},
    },
  })

export const globalStyles = globalCss({
  ":root": {
    "font-size": "16px",
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif, helvetica, arial",
    listStyle: "none",
  },
  body: {
    maxWidth: "100vw",
    minHeight: "fit-content",
    "overflow-x": "clip",
  },

  h1: {
    fontSize: "15rem",
    fontWeight: "900",
    display: "block",
    textTransform: "uppercase",
    "letter-spacing": "-22px",
    lineHeight: "11rem",
  },

  h2: {
    fontSize: "4rem",
    fontWeight: "100",
    display: "block",
    lineHeight: "4rem",
  },

  h3: {
    fontSize: "2rem",
    fontWeight: "600",
    display: "block",
    textTransform: "uppercase",
  },
  h4: {
    fontSize: "1.2rem",
    fontWeight: "600",
    display: "block",
    textTransform: "capitalize",
  },
  h5: {
    fontSize: "1.2rem",
    fontWeight: "400",
    display: "block",
    textTransform: "capitalize",
  },
  h6: {
    fontSize: "1.2rem",
    fontWeight: "400",
    display: "block",
    textTransform: "capitalize",
    color: "rgba(1, 1, 1, .3)",
  },

  p: {
    display: "inline",
    fontSize: "1.2rem",
    fontWeight: "300",
    lineHeight: "1.8rem",
    "letter-spacing": "0px",
    wordSpacing: "1px",
  },

  ".hightlight": {
    display: "inline",
    fontSize: "1.2rem",
    fontWeight: "300",
    lineHeight: "1.8rem",
    "letter-spacing": "0px",
    wordSpacing: "1px",
    color: "black",
    backgroundColor: "yellow",
    padding: "5px",
    textAlign: "center",
  },
  ".bold": {
    display: "inline",
    fontSize: "1.2rem",
    fontWeight: "800",
    lineHeight: "1.8rem",
    "letter-spacing": "0px",
    wordSpacing: "1px",
    color: "black",
    padding: "5px",
    textAlign: "center",
  },
  ".strike": {
    display: "inline",
    fontSize: "1.2rem",
    fontWeight: "800",
    lineHeight: "1.8rem",
    "letter-spacing": "0px",
    wordSpacing: "1px",
    color: "black",
    padding: "5px",
    textAlign: "center",
    "text-decoration": "wavy underline red",
  },
  ".code": {
    margin: "0px 5px",
    display: "inline",
    fontSize: "1.2rem",
    fontWeight: "200",
    lineHeight: "1.8rem",
    "letter-spacing": "0px",
    wordSpacing: "1px",
    color: "black",
    padding: "2px",
    textAlign: "center",
    fontFamily: "monospace",
    backgroundColor: "lightgray",
    letterSpacing: "-1px",
    padding: "5px",
  },

  a: {
    cursor: "pointer",
    color: "black",
    textDecoration: "none",
  },

  "a:hover, button:hover": {
    cursor: "pointer",
  },

  img: {
    objectFit: "contain",
    background: "transparent",
  },

  ".hero-text": {
    fontSize: "8rem",
    fontWeight: "800",
    textAlign: "center",
  },
})
