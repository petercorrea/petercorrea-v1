import Image from "next/image"
import { useEffect } from "react"
import { useAppContext } from "../../contexts/AppContext"
import hamburger from "../../public/design/hamburger.png"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"

// Outside Drawer Component
const OutsideDrawer = styled(Box, {
  backgroundColor: "pink",
  width: "100%",
  height: "100%",
  position: "fixed",
  top: "$z",
  bottom: "$z",

  variants: {
    show: {
      true: {
        display: "block",
      },
    },
    hidden: {
      true: {
        display: "none",
      },
    },
  },
})

// Drawer Component
const Wrapper = styled(Box, {
  width: "$300",
  "min-height": "100vh",
  height: "100%",
  position: "fixed",
  top: "$z",
  right: "$z",
  bottom: "$z",
  backgroundColor: "blue",
  transition: "transform 750ms cubic-bezier(.03,0,.51,1)",
  "will- change": "transform",

  variants: {
    open: {
      true: {
        transform: "translateX($z)",
      },
    },
    close: {
      true: {
        transform: "translateX($300)",
      },
    },
  },

  button: {
    marginTop: "$xxxl",
  },
})

export const Drawer = () => {
  const { appContext, setAppContext } = useAppContext()

  useEffect(() => {
    return
  }, [])

  const closeDrawer = () => {
    setAppContext({ show: false })
  }

  return appContext.show ? (
    <>
      <OutsideDrawer show onClick={closeDrawer}></OutsideDrawer>
      <Wrapper open border>
        <button onClick={closeDrawer}>Close</button>
        <p>This is a drawer</p>
      </Wrapper>
    </>
  ) : (
    <>
      <OutsideDrawer hidden onClick={closeDrawer}></OutsideDrawer>
      <Wrapper close>
        <button onClick={closeDrawer}>Close</button>
        <p>This is a drawer</p>
      </Wrapper>
    </>
  )
}

// Drawer Button Component
const ButtonWrapper = styled("button", {
  width: "$xl",
  height: "$xl",
  border: "none",
  backgroundColor: "transparent",

  ":hover": {
    cursor: "pointer",
  },
})

export const DrawerButton = () => {
  const { setAppContext } = useAppContext()

  const openDrawer = () => {
    setAppContext({ show: true })
  }

  return (
    <ButtonWrapper onClick={openDrawer}>
      <Image
        src={hamburger}
        alt="button to open side menu"
        onClick={openDrawer}
      ></Image>
    </ButtonWrapper>
  )
}
