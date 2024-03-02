import React from "react";
import ToastShelf from "../ToastShelf";
import Toast from "../Toast";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext({ toastList: [] });

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  function addToast(toast) {
    setToastList((currentList) => [...currentList, toast]);
  }

  function removeToast(id) {
    setToastList((currentList) =>
      currentList.filter((toast) => id != toast.id)
    );
  }

  const value = React.useMemo(() => {
    return { toastList, addToast, removeToast };
  }, [toastList, addToast, removeToast]);

  useEscapeKey(() => {
    setToastList([]);
  });

  return (
    <ToastContext.Provider value={value}>
      <ToastShelf>
        {toastList.map(({ message, variant, id }) => {
          return (
            <Toast
              variant={variant}
              key={id}
              onClose={() => {
                removeToast(id);
              }}
            >
              {message}
            </Toast>
          );
        })}
      </ToastShelf>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
