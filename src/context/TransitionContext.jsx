import { useState, createContext, createRef } from "react";

export const TransitionContext = createContext({ nodeRef: null, completed: false});

export const TransitionProvider = ({ children }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value) => {
    setCompleted(value);
  };

  return (
    <TransitionContext
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext>
  );
};

export default TransitionContext;
