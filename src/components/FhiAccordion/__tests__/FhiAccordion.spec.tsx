import { render } from '@testing-library/react';
import Accordion from '../FhiAccordion';

const DefaultHeader = () => <h4>Dette er en ustylet overskrift</h4>;
const DefaultContent = () => <div><span>Dette er ustylet innhold</span></div>;

const defaultArgs = {
  items: [
    {
      id: '1',
      header: <DefaultHeader />,
      content: <DefaultContent />,
    },
    {
      id: '2',
      header: <DefaultHeader />,
      content: <DefaultContent />,
    },
  ],
  className: 'Testclass',
};

describe('FhiAccordion', () => {
  test('snapshot test', () => {
    const { container } = render(
      <Accordion
        className="test"
        items={defaultArgs.items}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
