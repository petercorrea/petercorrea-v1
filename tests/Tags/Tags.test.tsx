import { render, screen } from "@testing-library/react"
import Tags from "../../components/ui/Tags"


describe('Home', () => {
  it('renders a tags', () => {
    render(<Tags list={["item1", "item2"]} />)

    const heading = screen.getAllByTestId("tags-test")
    expect(heading).toBeInTheDocument
  })
})