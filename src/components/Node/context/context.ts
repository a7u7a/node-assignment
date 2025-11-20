import { createContext } from "react";

export interface NodeContextType {
  selected: boolean;
  setSelected: (selected: boolean) => void;
  nodeDimensions: NodeDimensions;
  nodePositions: NodePositions;
}

export const NodeContext = createContext<NodeContextType | undefined>(
  undefined
);

export interface NodePositions {
  rectX: number;
  rectY: number;
  leftEdge: number;
  rightEdge: number;
  topEdge: number;
  bottomEdge: number;
  centerX: number;
  centerY: number;
}

export interface NodeDimensions {
  width: number;
  height: number;
}
