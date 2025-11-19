import { Children, ReactElement, useMemo } from "react";
import { StackProvider } from "@/components/Stack/context/StackContext";
import { useStackContext } from "@/components/Stack/hooks";
// import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import { getStackWidth, getStackHeight } from "@/components/Stack/utils";

interface StackProps {
  direction?: "row" | "column";
  justify?: "start" | "end";
  anchorPos: {
    x: number;
    y: number;
  };
  gap?: number;
  children: ReactElement | ReactElement[];
}

const StackContent = ({
  direction = "row",
  justify = "start",
  anchorPos,
  gap = 5,
  children,
}: StackProps) => {
  const { childDimensions } = useStackContext();
  const stackHeight = getStackHeight(childDimensions);
  const stackWidth = getStackWidth(childDimensions);
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

    const stackSize = direction === "row" ? stackWidth : stackHeight;
    if (justify === "end" && (stackWidth > 0 || stackHeight > 0)) {
      const offset = stackSize;

      positions.forEach((pos) => {
        if (direction === "row") {
          pos.x -= offset;
        } else {
          pos.y -= offset;
        }
      });
    }

    return positions;
  }, [
    childDimensions,
    childArray,
    direction,
    gap,
    stackWidth,
    stackHeight,
    justify,
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
