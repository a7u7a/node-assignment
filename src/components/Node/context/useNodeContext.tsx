import { useContext } from "react";
import { NodeContext } from "@/components/Node/context/NodeContext";

export const useNodeContext = () => {
  const context = useContext(NodeContext);
  if (!context) {
    throw new Error("useNodeContext must be used within a NodeProvider");
  }
  return context;
};
