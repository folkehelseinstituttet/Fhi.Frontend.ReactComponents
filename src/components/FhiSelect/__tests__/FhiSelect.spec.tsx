import renderer from 'react-test-renderer';
import Select from '../FhiSelect';

describe('FhiSelect', () => {
  test('snapshot test', () => {
    const select = renderer.create(
      <Select
        id="selectId"
        label="Select"
        onChange={() => {}}
        value={5}
        options={[
          { id: '1', text: '1', value: 1 },
          { id: '2', text: '2', value: 2 },
          { id: '3', text: '3', value: 3 },
          { id: '4', text: '4', value: 4 },
          { id: '5', text: '5', value: 5 },
        ]}
      />,
    );
    const tree = select.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
