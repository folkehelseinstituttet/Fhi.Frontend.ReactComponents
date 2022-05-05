import renderer from 'react-test-renderer';
import Toast from '../FhiToast';

describe('FhiToast', () => {
  test('snapshot test', () => {
    const toast = renderer.create(<Toast text="This is a toast!" removeToast={() => {}} delay={0} />);
    const tree = toast.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
