import React from "react";
import styles from "./ToastShelf.module.css";

function ToastShelf({ children }) {
  const childrenWithListItem = React.Children.map(children, (child) => {
    return <li className={styles.toastWrapper}>{child}</li>;
  });
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {childrenWithListItem}
    </ol>
  );
}

export default ToastShelf;
