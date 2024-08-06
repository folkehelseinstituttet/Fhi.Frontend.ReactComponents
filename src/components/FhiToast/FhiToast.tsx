import { FC } from 'react';
import Toast from 'react-bootstrap/Toast';
import styled from 'styled-components';

const MarginToast = styled(Toast)`
  margin-bottom: 1rem;
`;

type FhiToastProps = {
  title?: string,
  text: string,
  type?: 'success' | 'warning' | 'error',
  delay?: number,
  removeToast: () => void,
};

const FhiToast:FC<FhiToastProps> = ({
  title = undefined,
  text,
  type = undefined,
  delay = 5000,
  removeToast,
}) => (
  <MarginToast
    onClose={removeToast}
    delay={delay}
    bg={type}
    autohide={delay !== 0}
  >
    <Toast.Header>
      <strong className="me-auto">{title}</strong>
    </Toast.Header>
    <Toast.Body>
      {text}
    </Toast.Body>
  </MarginToast>
);

export default FhiToast;
