import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../FhiHeader';

describe('FhiHeader', () => {
  test('snapshot test', () => {
    const { container } = render(
      <MemoryRouter
        initialEntries={['/']}
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
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
    expect(container).toMatchSnapshot();
  });
});
