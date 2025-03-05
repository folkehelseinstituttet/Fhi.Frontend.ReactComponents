import React, {
  FC,
  useState,
  useContext,
  useCallback,
} from 'react';
import ToastContainer, { ToastProps, ToastWrapperProps } from './FhiToastContainer';

const ToastContext = React.createContext<{
  addToast:(content: ToastProps) => void,
  removeToast: (id: number) => void
}>({
      addToast: () => {},
      removeToast: () => {},
    });

let nextId = 1;

type ToastProviderProps = {
  children: React.ReactNode,
};

const ToastProvider:FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastWrapperProps[] | []>([]);

  const addToast = useCallback(
    (content) => {
      setToasts((toastList) => [
        ...toastList,
        {
          id: nextId++,
          content,
        },
      ]);
    },
    [setToasts],
  );

  const removeToast = useCallback(
    (id: number) => {
      setToasts((toastList) => toastList.filter((t) => t.id !== id));
    },
    [setToasts],
  );

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
      }}
    >
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const toastHelpers = useContext(ToastContext);

  return toastHelpers;
};

export { ToastContext, useToast };
export default ToastProvider;
