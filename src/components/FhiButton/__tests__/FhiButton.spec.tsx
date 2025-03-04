import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../FhiButton';

describe('FhiButton', () => {
  test('snapshot test', () => {
    const { container } = render(<Button onClick={() => {}}>test</Button>);
    expect(container).toMatchSnapshot();
  });
});
