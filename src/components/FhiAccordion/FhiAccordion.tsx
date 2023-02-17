import {
  FC, ReactElement, ReactNode,
} from 'react';
import { Accordion } from 'react-bootstrap';

type FhiAccordionProps = {
  items: {
    id: string,
    header: ReactNode,
    content: ReactElement,
    onOpen?: (eventKey: string) => void,
  }[],
  className?: string,
  flush?: boolean,
  alternate?: boolean,
};

const FhiAccordion:FC<FhiAccordionProps> = ({
  items,
  className,
  flush,
  alternate,
}) => (
  <Accordion flush={flush || alternate} className={`${className} ${alternate ? 'fhi-accordion-flush' : ''}`}>
    {items.map((item) => (
      <Accordion.Item key={item.id} eventKey={item.id}>
        <Accordion.Header>
          {item.header}
        </Accordion.Header>
        <Accordion.Body
          onEnter={() => item.onOpen && item.onOpen(item.id)}
        >
          {item.content}
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);

FhiAccordion.defaultProps = {
  className: '',
  flush: false,
  alternate: false,
};

export default FhiAccordion;
