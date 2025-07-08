import { useRef, createContext } from "react";

export const TransitionContext = createContext({ containerId: "" });

export const TransitionProvider = ({ children }) => {
  // const [containerId, setContainerId] = useState(false);
  const containerId = useRef("");
  const setContainerId = (value) => {
    containerId.current = value;
  };

  return (
    <TransitionContext
      value={{
        setContainerId,
        containerId,
      }}
    >
      {children}
    </TransitionContext>
  );
};

export default TransitionContext;
