import { useState, useMemo, ReactNode } from "react";
import { NodeContext } from "./context";

interface NodeProviderProps {
  children: ReactNode;
}

export const NodeProvider = ({ children }: NodeProviderProps) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const contextValue = useMemo(
    () => ({
      hovered,
      setHovered,
      selected,
      setSelected,
    }),
    [hovered, setHovered, selected, setSelected]
  );

  return (
    <NodeContext.Provider value={contextValue}>{children}</NodeContext.Provider>
  );
};
