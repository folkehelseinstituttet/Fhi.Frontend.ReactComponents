import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Tabs from '../FhiTabs';

describe('FhiTabs', () => {
  test('snapshot test', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Tabs links={[{ title: 'Fane nummer 1', path: '/1' }, { title: 'Fane nummer 2', path: '/2' }]} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
