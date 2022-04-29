import renderer from 'react-test-renderer';
import Details from '../FhiDetails';

describe('FhiDetails', () => {
  test('snapshot test', () => {
    const details = renderer.create(
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
    const tree = details.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
