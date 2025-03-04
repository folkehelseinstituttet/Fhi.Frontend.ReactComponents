import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from '../FhiDetails';

describe('FhiDetails', () => {
  test('snapshot test', () => {
    const { container } = render(
      <Details
        className="test"
        items={[
          {
            title: 'Dette er en tittel',
            text: 'Dette er beskrivelse',
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
