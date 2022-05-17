import { createStitches, globalCss } from "@stitches/react"

export const { config, createTheme, css, getCssText, styled, theme } =
  createStitches({
    theme: {
      colors: {
        // neutrals
        black: "#000000",
        charcoal: "#2F2F2F",
        gray: "#A4A4A4",
        lightgray: "#0c0c0c26",
        white: "#ffffff",

        // primaries
        red: "#9B0606",
        yellow: "#FFE176",
        green: "#72ECB8",
        cyan: "#1ADBE6",
        lightblue: "#008cff8f",
        blue: "#008cff",
        magenta: "#D077D3",

        // active, secondary, disabled
        active: "$blue",
        secondary: "$black",
        disabled: "$gray",
        bg: "#37005c",

        // border styles
        "border-light": "solid $lightgray 1px",
        "border-white": "solid $white 1px",
        "border-dark": "solid $black 1px",
        "border-red": "solid red 5px",
        "border-yellow": "solid $yellow 5px",
        "border-green": "solid $green 5px",
        "border-blue": "solid $blue 1px",
      },
      space: {
        xxxs: "1px",
        xxs: "2px",
        xs: "5px",
        s: "10px",
        m: "15px",
        l: "20px",
        xl: "40px",
        xxl: "80px",
        xxxl: "100px",
      },
      fontSizes: {
        xxl: "5rem",
        xl: "3rem",
        l: "2rem",
        m: "1.2rem",
        s: "1rem",
        xs: ".6rem",
      },
      fonts: {
        untitled: "Untitled Sans, apple-system, sans-serif",
        mono: "Söhne Mono, menlo, monospace",
      },
      fontWeights: {},
      lineHeights: {
        s: "1.8rem",
        m: "4rem",
        l: "11rem",
      },
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {
        borderRadius: "10px",
      },
      shadows: {
        dark: "0px 0px 15px 2px #5c5c5ca6",
        light: "10px 10px 10px 1px #0c0c0c26",
        blue: "0px 0px 10px 2px #008cff8f",
        lightblue: "0px 0px 15px 2px #008cff65",
      },
      zIndices: {},
      transitions: {},
    },
    media: {
      bp1: "(min-width: 0px)",
      bp2: "(min-width: 512px)",
      bp3: "(min-width: 768px)",
    },
  })

export const globalStyles = globalCss({
  // layout // layout // layout // layout // layout // layout // layout // layout
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
    "overflow-x": "hidden",
  },

  // typography // typography // typography // typography // typography // typography
  h1: {
    fontSize: "10vh",
    fontWeight: "900",
    display: "block",
    "letter-spacing": "-3px",
  },
  h2: {
    fontSize: "$xl",
    fontWeight: "100",
    display: "block",
  },
  h3: {
    fontSize: "$l",
    fontWeight: "600",
    display: "block",
  },
  h4: {
    fontSize: "$m",
    fontWeight: "600",
    display: "block",
  },
  h5: {
    fontSize: "$m",
    fontWeight: "400",
    display: "block",
  },
  h6: {
    fontSize: "$m",
    fontWeight: "400",
    display: "block",
    color: "$gray",
  },
  p: {
    display: "inline",
    fontSize: "$m",
    fontWeight: "300",
    lineHeight: "$s",
    "letter-spacing": "0px",
    wordSpacing: "1px",
  },

  // links and buttons // links and buttons // links and buttons // links and buttons
  a: {
    fontSize: "1.1rem",
    textDecoration: "none",
    color: "$black",
  },

  "a:hover, button:hover": {
    cursor: "pointer",
  },

  "a:visited": {
    color: "$black",
    "text-decoration": "none",
  },

  button: {
    fontSize: "1.1rem",
    textDecoration: "none",
    display: "block",
    padding: "10px",
    border: "$border-blue",
    borderRadius: "$borderRadius",
    color: "$white",
    transition: "transform 100ms ease",
    transform: "translateY(0px)",
    backgroundColor: "$active",
    boxShadow: "$lightblue",

    "&:hover": {
      transform: "translateY(-10px)",
      transition: "transform 100ms ease",
    },
  },

  // assets // assets // assets // assets // assets // assets // assets // assets
  img: {
    objectFit: "contain",
    background: "transparent",
  },

  // global classes // global classes // global classes // global classes // global classes
  ".hightlight": {
    display: "inline",
    fontSize: "$m",
    fontWeight: "300",
    wordSpacing: "1px",
    color: "$black",
    backgroundColor: "$yellow",
    padding: "5px",
    textAlign: "center",
  },
  ".bold": {
    display: "inline",
    fontSize: "$m",
    fontWeight: "800",
    "letter-spacing": "0px",
    wordSpacing: "1px",
    color: "$black",
    padding: "5px",
    textAlign: "center",
  },
  ".code": {
    "font-family": "'IBM Plex Mono', monospace",
    display: "inline",
    fontSize: "$s",
    fontWeight: "400",
    letterSpacing: "-1px",
    backgroundColor: "$lightgray",
  },
  ".active": {
    color: "$active",
  },
  ".caption": {
    "font-family": "'IBM Plex Mono', monospace",
    color: "$black",
    fontWeight: "400",
    fontSize: "$s",
    letterSpacing: "-1px",
    wordSpacing: "-4px",
  },
})
