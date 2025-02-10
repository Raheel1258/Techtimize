import { createContext, PropsWithChildren, useContext } from "react";

const SocketContext = createContext<WebSocket | undefined>(undefined);

const SocketProvider = ({
  value,
  children,
}: PropsWithChildren<{ value: WebSocket | undefined }>) => {
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocketContext was called outside the SocketProvider");
  }
  return context;
};

export { useSocketContext, SocketProvider };
