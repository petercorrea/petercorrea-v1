import { styled } from "../../../styles/stitches.config"
import Box from "../../layout/Box"

type Reply = {
  author: string
  reply: string
  likes: number
}

type Thread = {
  author: string
  published: string
  title: string
  description: string
  likes: number
  replies: Reply[]
}

const Wrapper = styled(Box, {})

export default ({ author }: Partial<Thread>) => {
  return (
    <Wrapper>
      <Box></Box>
      {author}
      <Box></Box>
    </Wrapper>
  )
}
