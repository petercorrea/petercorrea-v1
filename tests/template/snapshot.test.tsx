import renderer from 'react-test-renderer';

it('renders homepage unchanged', () => {
     const tree = renderer.create(<div></div>)
         .toJSON();
    
    expect(tree).toMatchSnapshot()
})