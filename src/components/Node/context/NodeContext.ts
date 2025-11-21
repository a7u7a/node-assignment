import { createContext } from "react";

export interface NodeContextType {
  selected: boolean;
  setSelected: (selected: boolean) => void;
  nodeDimensions: NodeDimensions;
  nodePositions: NodePositions;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  result: string;
  setResult: (result: string) => void;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
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
  IOTopEdge: number;
  IOLeftEdge: number;
  IORightEdge: number;
}

export interface NodeDimensions {
  width: number;
  height: number;
}
