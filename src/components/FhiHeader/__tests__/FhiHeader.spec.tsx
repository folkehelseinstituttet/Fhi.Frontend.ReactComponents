import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../FhiHeader';

describe('FhiHeader', () => {
  test('snapshot test', () => {
    const { container } = render(
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
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
