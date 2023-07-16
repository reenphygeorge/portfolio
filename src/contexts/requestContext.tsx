import { FC, PropsWithChildren, createContext, useState } from "react";

type RequestPayload = {
  method: string;
  route: string;
};

type RequestContextProps = {
  payload: RequestPayload;
  setPayload: (payload: RequestPayload) => void;
};

const RequestContext = createContext<RequestContextProps>({
  payload: {
    method: "GET",
    route: "home",
  },
  setPayload: () => {},
});

const RequestProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [payload, setPayload] = useState<RequestPayload>({
    method: "GET",
    route: "home",
  });

  const requestContextProps: RequestContextProps = {
    payload,
    setPayload,
  };

  return (
    <RequestContext.Provider value={requestContextProps}>
      {children}
    </RequestContext.Provider>
  );
};

export { RequestContext, RequestProvider };
