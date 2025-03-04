import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toast from '../FhiToast';

describe('FhiToast', () => {
  test('snapshot test', () => {
    const { container } = render(<Toast text="This is a toast!" removeToast={() => {}} delay={0} />);
    expect(container).toMatchSnapshot();
  });
});
