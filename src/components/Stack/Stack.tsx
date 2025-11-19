import { Children, ReactElement, useMemo } from "react";
import { StackProvider } from "./context/StackContext";
import { useStackContext } from "./hooks/useStackContext";
// import { useNodeContext } from "../Node/hooks/useNodeContext";

interface StackProps {
  direction?: "row" | "column";
  justifyContent?: "start" | "end";
  anchorPos: {
    x: number;
    y: number;
  };
  gap?: number;
  children: ReactElement | ReactElement[];
}

const StackContent = ({
  direction = "row",
  // justifyContent = "start",
  anchorPos,
  gap = 5,
  children,
}: StackProps) => {
  const { childDimensions } = useStackContext();
  // const { nodeDimensions } = useNodeContext();
  // const { width: nodeWidth, height: nodeHeight } = nodeDimensions;
  const childArray = Children.toArray(children) as ReactElement[];

  const childPositions = useMemo(() => {
    const positions: Array<{ x: number; y: number }> = [];
    let currentOffset = 0;

    childArray.forEach((_, index) => {
      const dims = childDimensions.get(index);

      if (direction === "row") {
        positions.push({ x: currentOffset, y: 0 });
        if (dims) {
          currentOffset += dims.width + gap;
        }
      } else {
        // column
        positions.push({ x: 0, y: currentOffset });
        if (dims) {
          currentOffset += dims.height + gap;
        }
      }
    });

    // const totalSize = 0;

    // if (justifyContent === "end" && totalSize > 0) {
    //   const containerSize = direction === "row" ? nodeWidth : nodeHeight;
    //   const offset = containerSize - totalSize;

    //   positions.forEach((pos) => {
    //     if (direction === "row") {
    //       pos.x += offset;
    //     } else {
    //       pos.y += offset;
    //     }
    //   });
    // }

    return positions;
  }, [
    childDimensions,
    childArray,
    direction,
    gap,
    // justifyContent,
    // nodeWidth,
    // nodeHeight,
  ]);

  return (
    <g transform={`translate(${anchorPos.x}, ${anchorPos.y})`}>
      {childArray.map((child, index) => {
        const position = childPositions[index] || { x: 0, y: 0 };
        return (
          <g key={index} transform={`translate(${position.x}, ${position.y})`}>
            {child}
          </g>
        );
      })}
    </g>
  );
};

const Stack = (props: StackProps) => {
  return (
    <StackProvider>
      <StackContent {...props} />
    </StackProvider>
  );
};

export default Stack;
