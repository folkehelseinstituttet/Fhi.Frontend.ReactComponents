import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TabBar from '../FhiTabBar';

describe('FhiTabBar', () => {
  test('snapshot test', () => {
    const tabBar = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <TabBar
          className="test"
          links={[
            { title: 'Side 1', path: '/1' },
            { title: 'Side 2', path: '/2' },
            { title: 'Side 3', path: '/3' },
          ]}
        />
      </MemoryRouter>,
    );
    const tree = tabBar.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
