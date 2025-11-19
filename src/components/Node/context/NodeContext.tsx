import { useState, useMemo, ReactNode } from "react";
import { NodeContext } from "./context";
import { getNodePositions } from "../../../utils";

interface NodeProviderProps {
  children: ReactNode;
  nodeDimensions: { width: number; height: number };
}

export const NodeProvider = ({ children, nodeDimensions }: NodeProviderProps) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  
  const nodePositions = useMemo(
    () => getNodePositions(nodeDimensions),
    [nodeDimensions]
  );

  const contextValue = useMemo(
    () => ({
      hovered,
      setHovered,
      selected,
      setSelected,
      nodeDimensions,
      nodePositions,
    }),
    [
      hovered,
      setHovered,
      selected,
      setSelected,
      nodeDimensions,
      nodePositions,
    ]
  );

  return (
    <NodeContext.Provider value={contextValue}>{children}</NodeContext.Provider>
  );
};
