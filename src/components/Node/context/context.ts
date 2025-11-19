import { createContext } from "react";

export interface NodeContextType {
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
  selected: boolean;
  setSelected: (selected: boolean) => void;
}

export const NodeContext = createContext<NodeContextType | undefined>(
  undefined
);
