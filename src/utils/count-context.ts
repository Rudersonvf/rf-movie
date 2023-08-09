import { createContext } from "react";

export type ContextCardCountType = {
  contextCardCount: number;
  setContextCardCount: (contextCount: number) => void;
};

export const ContextCardCount = createContext<ContextCardCountType>({
  contextCardCount: 0,
  setContextCardCount: () => {},
});
