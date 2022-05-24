import Link from "next/link"
import { LOCAL_CMS } from "../../constants/constants"
import { Page } from "../../generated"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Image from "./Image"

const Card = styled(Box, {
  display: "flex",
  flexBasis: "30%",
  transition: "transform ease 200ms",

  p: {
    display: "block",
  },

  "&:hover": {
    cursor: "pointer",
    transform: "translateY(-$s)",
  },
})

type CardProps = {
  post: Page
  key: string | number
}

export default ({ post, key }: CardProps) => {
  return (
    <Link href="/posts/2" key={key}>
      <Card border column>
        <Image
          src={`${LOCAL_CMS}${post.image.data.attributes.url}`}
          alt="cover picture"
          size="xl"
          objectFit="cover"
        ></Image>
        <p>{post.title}</p>
        <p>{post.date}</p>
      </Card>
    </Link>
  )
}
