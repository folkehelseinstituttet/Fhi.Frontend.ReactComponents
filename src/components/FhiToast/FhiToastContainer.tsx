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

export type ToastWrapperProps = {
  id: number,
  content: {
    title?: string,
    text: string,
    type?: 'success' | 'warning' | 'error',
    delay?: number,
  },
};

export type ToastProps = {
  title?: string,
  text: string,
  type?: 'success' | 'warning' | 'error',
  delay?: number,
};

type ToastContainerProps = {
  toasts: ToastWrapperProps[],
  removeToast: (id: number) => void,
};

const ToastContainer: FC<ToastContainerProps> = ({ toasts, removeToast }) => (
  <ToastWrapper>
    {toasts.map(({ id, content }) => (
      <Toast
        key={id}
        title={content.title}
        type={content.type}
        text={content.text}
        delay={content.delay}
        removeToast={() => removeToast(id)}
      />
    ))}
  </ToastWrapper>
);

export default ToastContainer;
