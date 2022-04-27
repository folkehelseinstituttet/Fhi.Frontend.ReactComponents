import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button', () => {
  test('snapshot test', () => {
    const button = renderer.create(<Button text="test" onClick={() => {}} />);
    const tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
