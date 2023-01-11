import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Tabs from '../FhiTabs';

describe('FhiTabs', () => {
  test('snapshot test', () => {
    const tabs = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <Tabs links={[{ title: 'Fane nummer 1', path: '/1' }, { title: 'Fane nummer 2', path: '/2' }]} />
      </MemoryRouter>,
    );
    const tree = tabs.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
