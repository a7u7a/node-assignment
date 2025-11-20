import { useState, useMemo, ReactNode } from "react";
import { NodeContext } from "@/components/Node/context/NodeContext";

interface NodeProviderProps {
  children: ReactNode;
  nodeDimensions: { width: number; height: number };
}

const NODE_PADDING = 5;
const IO_PADDING_X = 10;
const IO_PADDING_TOP = 20;

const getNodePositions = (nodeDimensions: {
  width: number;
  height: number;
}) => {
  const { width, height } = nodeDimensions;
  const rectX = -width / 2;
  const rectY = -height / 2;
  const leftEdge = rectX + NODE_PADDING;
  const rightEdge = rectX + width - NODE_PADDING;
  const topEdge = rectY + NODE_PADDING;
  const bottomEdge = rectY + height - NODE_PADDING;
  const centerX = rectX + width / 2;
  const centerY = rectY + height / 2;
  const IOTopEdge = rectY + IO_PADDING_TOP;
  const IOLeftEdge = leftEdge - IO_PADDING_X;
  const IORightEdge = rightEdge + IO_PADDING_X;
  return {
    rectX,
    rectY,
    leftEdge,
    rightEdge,
    topEdge,
    bottomEdge,
    centerX,
    centerY,
    IOTopEdge,
    IOLeftEdge,
    IORightEdge,
  };
};

export const NodeProvider = ({
  children,
  nodeDimensions,
}: NodeProviderProps) => {
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
    [hovered, setHovered, selected, setSelected, nodeDimensions, nodePositions]
  );

  return (
    <NodeContext.Provider value={contextValue}>{children}</NodeContext.Provider>
  );
};
