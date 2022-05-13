import Box from "../../components/layout/Box"
import Padding from "../layout/Padding"
import { styled } from "../../stitches.config"

const Wrapper = styled(Box, {})

export default () => {
  return (
    <Padding>
      <Wrapper column className="bio">
        <h1>bio</h1>
        <br></br>
        <p>
          I build software. My work requires discussing the scope and goal of
          each solution, sharing tradeoffs between different implementations,
          establishing milestones, and deploying high-quality code. A typical
          day involves optimizing algorithmic and network performance, deploying
          servers, migrating databases, integrating APIs, building machine
          learning models, interviewing candidates, collaborating with
          designers, presenting to management, and researching standardized
          specifications. When I'm not working on products, I'm leading teams,
          managing talent, and driving operations. Common tools include
          JavaScript, Python, Typescript, React, Node, AWS, GraphQL, Postgres,
          SQL, MongoDB, Docker, Git, HTML, CSS, and more. My experience includes
          web and native projects; government and commercial clients.
        </p>
        <br></br>
        <p>
          Much of my personal life is involved in mathematics, algorithms,
          software engineering, and and computer science as these domains.
          Current projects include building an image classifier with neural
          networks and a recommendation engine for matching similar users. When
          I'm not in front of the computer, I'm likely in front of a smaller
          computer I refer to as my phone. If your project involves improving
          economic opportunity, public health, access to education, climate,
          food and resources, or alternative currencies let's connect!
        </p>
      </Wrapper>
    </Padding>
  )
}
