import Image from "next/image"
import { useEffect } from "react"
import { useAppContext } from "../../../context/AppContext"
import hamburger from "../../../public/design/hamburger.png"
import { styled } from "../../../styles/stitches.config"
import Box from "../../layout/Box"

// Outside Drawer Component
const OutsideDrawer = styled(Box, {
  backgroundColor: "pink",
  width: "100%",
  height: "100%",
  position: "fixed",
  top: "0px",
  bottom: "0px",

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
  width: "300px",
  "min-height": "100vh",
  height: "100%",
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  backgroundColor: "blue",
  transition: "transform 750ms cubic-bezier(.03,0,.51,1)",
  "will- change": "transform",

  variants: {
    open: {
      true: {
        transform: "translateX(0px)",
      },
    },
    close: {
      true: {
        transform: "translateX(300px)",
      },
    },
  },

  button: {
    marginTop: "100px",
  },
})

export const Drawer = (props) => {
  let { appContext, setAppContext } = useAppContext()

  useEffect(() => {
    // console.log("Drawer was rendered")
  }, [])

  const closeDrawer = () => {
    setAppContext({ show: false })
  }

  return appContext.show ? (
    <>
      <OutsideDrawer show onClick={closeDrawer}></OutsideDrawer>
      <Wrapper {...props} open border>
        <button onClick={closeDrawer}>Close</button>
        <p>This is a drawer</p>
      </Wrapper>
    </>
  ) : (
    <>
      <OutsideDrawer hidden onClick={closeDrawer}></OutsideDrawer>
      <Wrapper {...props} close>
        <button onClick={closeDrawer}>Close</button>
        <p>This is a drawer</p>
      </Wrapper>
    </>
  )
}

// Drawer Button Component
const ButtonWrapper = styled("button", {
  width: "50px",
  height: "50px",
  border: "none",
  backgroundColor: "transparent",

  ":hover": {
    cursor: "pointer",
  },
})

export const DrawerButton = () => {
  let { setAppContext } = useAppContext()

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
