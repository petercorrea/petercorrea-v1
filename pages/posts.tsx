import Box from "../components/layout/Box"
import Padding from "../components/layout/Padding"
import MobileNavbar from "../components/ui/MobileNavbar"
import Navbar from "../components/ui/Navbar"
import { styled } from "../styles/stitches.config"

const Wrapper = styled(Box, {})

export default function route() {
  let html = []

  for (let i = 0; i < 10; i++) {
    html.push(<></>)
  }

  return (
    <div>
      <MobileNavbar />
      <Navbar />
      <Padding>
        <Wrapper>
          <h1>posts</h1>
        </Wrapper>
      </Padding>
    </div>
  )
}
