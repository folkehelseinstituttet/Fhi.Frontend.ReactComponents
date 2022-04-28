import renderer from 'react-test-renderer';
import Button from '../FhiButton';

describe('FhiButton', () => {
  test('snapshot test', () => {
    const button = renderer.create(<Button text="test" onClick={() => {}} />);
    const tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
