import React from "react";

export default function useEscapeKey(callback, keyevent = "keydown") {
  const helper = (e) => {
    if (e.key == "Escape") {
      callback();
    }
  };
  React.useEffect(() => {
    window.addEventListener(keyevent, helper);
    return () => {
      window.removeEventListener(keyevent, helper);
    };
  }, [callback]);
}
