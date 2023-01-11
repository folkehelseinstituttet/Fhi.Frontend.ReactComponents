import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../FhiHeader';

describe('FhiHeader', () => {
  test('snapshot test', () => {
    const header = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <Header
          className="test"
          projectName="Testproject"
          menuItems={[
            {
              name: 'Dette er en tittel',
              routerLink: '/rl',
            },
          ]}
        />
      </MemoryRouter>,
    );
    const tree = header.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
