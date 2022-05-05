import { FC } from 'react';
import styled from 'styled-components';

import Toast from './FhiToast';

const ToastWrapper = styled.div`
  position: fixed;
  right: 15px;
  top: 15px;
  max-width: 350px;
  z-index: 1;
`;

export type ToastProps = {
  id: number,
  content: {
    text: string,
    type?: 'success' | 'warning' | 'error',
  },
};

type ToastContainerProps = {
  toasts: ToastProps[],
  removeToast: (id: number) => void,
};

const ToastContainer: FC<ToastContainerProps> = ({ toasts, removeToast }) => (
  <ToastWrapper>
    {toasts.map(({ id, content }) => (
      <Toast key={id} id={id} type={content.type} text={content.text} removeToast={removeToast} />
    ))}
  </ToastWrapper>
);

export default ToastContainer;
