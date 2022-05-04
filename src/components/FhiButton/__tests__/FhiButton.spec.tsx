import renderer from 'react-test-renderer';
import Button from '../FhiButton';

describe('FhiButton', () => {
  test('snapshot test', () => {
    const button = renderer.create(<Button onClick={() => {}}>test</Button>);
    const tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
