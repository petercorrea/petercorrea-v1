import renderer from "react-test-renderer"
import Tags from "../../components/ui/Tags"

it("renders homepage unchanged", () => {
  const tree = renderer.create(<Tags list={["item1", "item2"]} />).toJSON()

  expect(tree).toMatchSnapshot()
})
