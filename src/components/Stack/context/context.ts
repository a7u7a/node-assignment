import { createContext } from "react";

export interface ChildDimensions {
  width: number;
  height: number;
}

export interface StackContextType {
  childDimensions: Map<number, ChildDimensions>;
  setChildDimensions: (index: number, dimensions: ChildDimensions) => void;
  registerChild: () => number;
}

export const StackContext = createContext<StackContextType | undefined>(
  undefined
);
