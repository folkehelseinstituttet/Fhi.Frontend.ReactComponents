import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from '../FhiSpinner';

describe('FhiSpinner', () => {
  test('snapshot test', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
