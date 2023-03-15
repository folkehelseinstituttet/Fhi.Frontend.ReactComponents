import renderer from 'react-test-renderer';
import Spinner from '../FhiSpinner';

describe('FhiSpinner', () => {
  test('snapshot test', () => {
    const spinner = renderer.create(<Spinner />);
    const tree = spinner.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
