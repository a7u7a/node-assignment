import { Children, ReactElement, useMemo } from "react";
import { StackProvider } from "@/components/Stack/context/StackContext";
import { useStackContext } from "@/components/Stack/hooks";
// import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import { getStackWidth, getStackHeight } from "@/components/Stack/utils";

interface StackProps {
  align?: "right-bottom" | "left-bottom" | "right-top" | "left-top";
  stackingDirection?: "right" | "left" | "top" | "down";
  anchorPos: {
    x: number;
    y: number;
  };
  gap?: number;
  children: ReactElement | ReactElement[];
}

const StackContent = ({
  stackingDirection = "right",
  align = "left-top",
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

    // Calculate relative positions based on stacking direction
    childArray.forEach((_, index) => {
      const dims = childDimensions.get(index);

      switch (stackingDirection) {
        case "right":
          positions.push({ x: currentOffset, y: 0 });
          if (dims) {
            currentOffset += dims.width + gap;
          }
          break;
        case "left":
          positions.push({ x: -currentOffset, y: 0 });
          if (dims) {
            currentOffset += dims.width + gap;
          }
          break;
        case "down":
          positions.push({ x: 0, y: currentOffset });
          if (dims) {
            currentOffset += dims.height + gap;
          }
          break;
        case "top":
          positions.push({ x: 0, y: -currentOffset });
          if (dims) {
            currentOffset += dims.height + gap;
          }
          break;
      }
    });

    // Apply alignment offset to position the stack relative to anchor
    let alignOffsetX = 0;
    let alignOffsetY = 0;

    const isHorizontal = stackingDirection === "right" || stackingDirection === "left";
    const totalWidth = isHorizontal ? stackWidth + (childArray.length - 1) * gap : Math.max(...Array.from(childDimensions.values()).map(d => d.width));
    const totalHeight = !isHorizontal ? stackHeight + (childArray.length - 1) * gap : Math.max(...Array.from(childDimensions.values()).map(d => d.height));

    // Horizontal alignment
    if (align.includes("right")) {
      alignOffsetX = -totalWidth;
    } else if (align.includes("left")) {
      alignOffsetX = 0;
    }

    // Vertical alignment
    if (align.includes("bottom")) {
      alignOffsetY = -totalHeight;
    } else if (align.includes("top")) {
      alignOffsetY = 0;
    }

    // Apply alignment offset to all positions
    positions.forEach((pos) => {
      pos.x += alignOffsetX;
      pos.y += alignOffsetY;
    });

    return positions;
  }, [
    childDimensions,
    childArray,
    stackingDirection,
    align,
    gap,
    stackWidth,
    stackHeight,
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
