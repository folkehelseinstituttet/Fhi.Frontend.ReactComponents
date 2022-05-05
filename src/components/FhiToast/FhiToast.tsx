import { FC } from 'react';
import Toast from 'react-bootstrap/Toast';
import styled from 'styled-components';

const MarginToast = styled(Toast)`
  margin-bottom: 1rem;
`;

const ToastBody = styled(Toast.Body)`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.tekst};
  padding: 20px;
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => `0 0.25rem 0.5rem ${theme.fhiGrey1}`};
  ${({ type, theme }) => {
    switch (type) {
      case 'success':
        return `background: ${theme.toastSuccess || theme.fhiGreen1}`;
      case 'warning':
        return `background: ${theme.toastWarning || theme.fhiOrange1}`;
      case 'error':
        return `background: ${theme.toastError || theme.fhiPinkLight3}`;
      default:
        return `background: ${theme.toastNetural || theme.fhiBlueGrey2}`;
    }
  }}
`;

const CloseButton = styled.button`
  align-self: start;
  margin-top: -1.5rem;
  margin-right: -1rem;
  font-size: 2rem;
  min-width: 2rem;
  border: none;
  background: none;
`;

type FhiToastProps = {
  text: string,
  type?: 'success' | 'warning' | 'error',
  delay?: number,
  removeToast: () => void,
};

const FhiToast:FC<FhiToastProps> = ({
  text,
  type,
  delay,
  removeToast,
}) => (
  <MarginToast
    onClose={removeToast}
    delay={delay}
    autohide
  >
    <ToastBody
      type={type}
    >
      {text}
      <CloseButton type="button" className="btn-close ml-2 mb-1" onClick={removeToast}>
        <span aria-hidden="true">×</span>
        <span className="sr-only">Close</span>
      </CloseButton>
    </ToastBody>
  </MarginToast>
);

FhiToast.defaultProps = {
  type: undefined,
  delay: 5000,
};

export default FhiToast;
