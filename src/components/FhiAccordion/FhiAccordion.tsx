import {
  FC, ReactElement, ReactNode, useContext,
} from 'react';
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';

type FhiAccordionProps = {
  items: {
    id: string,
    header: ReactNode,
    content: ReactElement,
    onOpen?: (eventKey: string) => void,
  }[],
  arrowIcon: IconDefinition,
  className?: string,
};

const AccordionContainer = styled.div``;

const AccordionPanel = styled(Card)`
  margin-bottom: 25px;
  border-radius: 4px !important;
  box-shadow: 0px 2px 2px #00000029;
`;

const AccordionHeader = styled(Card.Header)`
  display: flex;
  padding: 0;
  background-color: ${({ theme }) => theme.fhiGreyLight2};

  flex-direction: row;
  align-items: center;
  height: 104px;
  border-bottom: none;   
`;

const AccordionToggle = styled.button`
  height: 100%;
  width: 101px;
  border: 0;
  color: ${({ theme }) => theme.fhiWhite};
  background-color: ${({ theme }) => theme.fhiBlueGrey5};
`;

const AccordionToggleIcon = styled(FontAwesomeIcon)`
  display: flex;
  justify-content: center;
  margin: auto;
  font-size: 48px;
  transition: transform 300ms ease;
  ${(props) => props.$isOpen && 'transform: rotate(180deg);'}
`;

type AccordionToggleButtonProps = {
  eventKey: string,
  icon: IconDefinition,
  onOpen?: (eventKey: string)=> void,
};

const AccordionToggleButton:FC<AccordionToggleButtonProps> = ({
  eventKey,
  icon,
  onOpen,
}) => {
  const { activeEventKey } = useContext(AccordionContext);

  const isOpen = activeEventKey === eventKey;

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => (!isOpen && onOpen && onOpen(eventKey)),
  );
  return (
    <AccordionToggle onClick={decoratedOnClick}>
      {isOpen}
      <AccordionToggleIcon icon={icon} $isOpen={isOpen} className="fhi-accordion__panel__toggle-icon" />
    </AccordionToggle>
  );
};

AccordionToggleButton.defaultProps = {
  onOpen: () => {},
};

const FhiAccordion:FC<FhiAccordionProps> = ({ items, arrowIcon, className }) => (
  <AccordionContainer className={className}>
    <Accordion>
      {items.map((item) => (
        <AccordionPanel key={item.id}>
          <AccordionHeader>
            <AccordionToggleButton
              eventKey={item.id}
              icon={arrowIcon}
              onOpen={item.onOpen}
            />
            {item.header}
          </AccordionHeader>
          <Accordion.Collapse eventKey={item.id}>
            {item.content}
          </Accordion.Collapse>
        </AccordionPanel>
      ))}
    </Accordion>
  </AccordionContainer>
);

FhiAccordion.defaultProps = {
  className: '',
};

export default FhiAccordion;
