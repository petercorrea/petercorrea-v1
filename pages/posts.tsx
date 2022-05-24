import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Box from "../components/layout/Box"
import Padding from "../components/layout/Padding"
import Card from "../components/ui/Card"
import MobileNavbar from "../components/ui/MobileNavbar"
import Navbar from "../components/ui/Navbar"
import { Page, useGetPagesQuery } from "../generated"
import { styled } from "../styles/stitches.config"

const Wrapper = styled(Box, {
  display: "flex",
  flexFlow: "row wrap",
})

export default function Posts() {
  const router = useRouter()
  const [posts, setPosts] = useState([] as Page[])

  const [result] = useGetPagesQuery()
  const { data, fetching, error } = result

  useEffect(() => {
    setPosts(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data?.pages.data.map((item) => {
        return item.attributes
      })
    )
  }, [data, router.query.id])

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <>
      <MobileNavbar />
      <Navbar />
      <Padding top l>
        <h1>posts</h1>
        <Wrapper Box border>
          {posts?.map((post, idx) => {
            return <Card post={post} key={idx}></Card>
          })}
        </Wrapper>
      </Padding>
    </>
  )
}
