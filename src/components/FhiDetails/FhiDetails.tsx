import { FC, Fragment } from 'react';
import styled from 'styled-components';

type FhiDetailsProps = {
  className?: string
  items: {
    title: string,
    text: string,
  }[]
};

const DetailsContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: left;
  grid-template-columns: 1fr 1fr;
  max-width: 450px;
`;

const DetailsTitle = styled.span`
  font-weight: bold;
`;

const FhiDetails:FC<FhiDetailsProps> = ({ items, className }) => (
  <DetailsContainer className={className}>
    {items.map((item) => (
      <Fragment key={item.title}>
        <DetailsTitle>{item.title}</DetailsTitle>
        <span>{item.text}</span>
      </Fragment>
    ))}
  </DetailsContainer>
);

FhiDetails.defaultProps = {
  className: '',
};

export default FhiDetails;
