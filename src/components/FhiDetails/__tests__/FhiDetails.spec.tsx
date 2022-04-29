import renderer from 'react-test-renderer';
import Details from '../FhiDetails';

describe('FhiDetails', () => {
  test('snapshot test', () => {
    const button = renderer.create(
      <Details
        className="test"
        items={[
          {
            title: 'Dette er en tittel',
            text: 'Dette er beskrivelse',
          },
        ]}
      />,
    );
    const tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
