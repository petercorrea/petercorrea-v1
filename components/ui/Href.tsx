import { styled } from "../../styles/stitches.config"

const Wrapper = styled("a", {
  fontSize: "1.1rem",
  color: "$black",
  textDecoration: "none",

  ".link_underline": {
    border: "$active solid $xxxs",
    width: "$z",
    transition: "width ease 200ms, opacity ease 300ms",
    opacity: "0",
  },

  "&:hover": {
    ".link_underline": {
      maxWidth: "100%",
      border: "$active solid $xxxs",
      transition: "width ease 200ms",
      width: "100%",
      opacity: "1",
    },
  },
})

type Props = {
  target?: string
  href: string
  download?: boolean
  children?: React.ReactNode
}

export default ({ target, href, download, ...props }: Props) => {
  return (
    <>
      <Wrapper
        target={target || "_blank"}
        rel="noopener noreferrer"
        href={href}
        download={download}
        {...props}
      >
        {props.children}
      </Wrapper>
      <div className="link_underline"></div>
    </>
  )
}
