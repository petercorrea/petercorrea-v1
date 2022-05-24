import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Box from "../components/layout/Box"
import Padding from "../components/layout/Padding"
import MobileNavbar from "../components/ui/MobileNavbar"
import Navbar from "../components/ui/Navbar"
import { LOCAL_CMS } from "../constants/constants"
import { Page, useGetPagesQuery } from "../generated"
import { styled } from "../styles/stitches.config"


const Wrapper = styled(Box, {
  display: "flex",
  flexFlow: "row wrap",
})

const ImageWrapper = styled(Box, {
  position: "relative",
  width: "300px",
  height: "300px"
})

const Card = styled(Box, {
  display: "flex",
  flexBasis: "30%",
  // width: "300px",
  height: "300px",

  "p": {
    display: "block"
  },

  "&:hover": {
    cursor: "pointer"
  }
})

export default function Posts() {
  const router = useRouter()
  let [posts, setPosts] = useState([] as Page[])

  const [result] = useGetPagesQuery()
  const { data, fetching, error } = result

  useEffect(() => {
    // @ts-ignore
    setPosts(data?.pages.data.map(item => {
      return item.attributes
    }))
  }, [data, router.query.id])

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div>
      <MobileNavbar />
      <Navbar />
      <Padding>
         <h1>posts</h1>
        <Wrapper Box border>
          {posts?.map((post, idx) => {
            
            return (
              <Link href="/posts/2" key={idx} >
                  <Card border column>
                    <ImageWrapper>
                      <Image src={`${LOCAL_CMS}${post.image.data.attributes.url}`} alt="cover picture" layout="fill" objectFit='cover'></Image>
                    </ImageWrapper>
                    <p>{post.title}</p>
                    <p>{post.date}</p>
                  </Card>       
              </Link>
            )})}
        </Wrapper>
      </Padding>
    </div>
  )
}
