import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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
          logo="../assets/logo-norsk-kun-forkortelse-svart-uten-luft-rundt.svg"
          logoLight="../assets/logo-norsk-kun-forkortelse-hvit-uten-luft-rundt.svg"
          menuItems={[
            {
              name: 'Dette er en tittel',
              routerLink: '/rl',
            },
          ]}
          faIcons={{
            menu: faBars,
            close: faTimes,
          }}
        />
      </MemoryRouter>,
    );
    const tree = header.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
