import { createContext } from "react";

export interface NodeContextType {
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
  selected: boolean;
  setSelected: (selected: boolean) => void;
  nodeDimensions: { width: number; height: number };
  nodePositions: {
    rectX: number;
    rectY: number;
    leftEdge: number;
    rightEdge: number;
    topEdge: number;
    bottomEdge: number;
    centerX: number;
    centerY: number;
  };
}

export const NodeContext = createContext<NodeContextType | undefined>(
  undefined
);
