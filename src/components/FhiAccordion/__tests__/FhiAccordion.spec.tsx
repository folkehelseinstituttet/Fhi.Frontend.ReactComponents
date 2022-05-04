import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import renderer from 'react-test-renderer';
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
  arrowIcon: faAngleDown,
  className: 'Testclass',
};

describe('FhiAccordion', () => {
  test('snapshot test', () => {
    const accordion = renderer.create(
      <Accordion
        className="test"
        items={defaultArgs.items}
        arrowIcon={defaultArgs.arrowIcon}
      />,
    );
    const tree = accordion.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
