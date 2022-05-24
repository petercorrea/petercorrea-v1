import { render, screen } from "@testing-library/react"


describe('Home', () => {
  it('renders a tags', () => {
    render(<div>test</div>)
    const element = screen.getByText("test")
    expect(element).toBeInTheDocument
  })
})