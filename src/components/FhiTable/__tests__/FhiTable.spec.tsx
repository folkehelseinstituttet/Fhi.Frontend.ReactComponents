import renderer from 'react-test-renderer';
import Table from '../FhiTable';
import { TableStructure } from '../FhiTable.model';

const testHeaders: string[] = ['Header1', 'Header2'];
const testData: TableStructure[] = [
  {
    key: 1,
    data: ['Testdata11', 'Testdata12'],
  },
  {
    key: 2,
    data: ['Testdata21', 'Testdata22'],
  },
];

describe('FhiDetails', () => {
  test('snapshot test', () => {
    const table = renderer.create(
      <Table
        className="test"
        data={testData}
        headers={testHeaders}
      />,
    );
    const tree = table.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
