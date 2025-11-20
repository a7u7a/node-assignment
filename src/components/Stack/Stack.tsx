import { Children, ReactElement, useMemo } from "react";
import { StackProvider } from "@/components/Stack/context/StackContext";
import { useStackContext } from "@/components/Stack/hooks";
// import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import { getStackDimensions } from "@/components/Stack/utils";

interface StackProps {
  stackingDirection?: "right" | "left" | "up" | "down";
  offsetX?: "left" | "right";
  offsetY?: "top" | "bottom";
  anchorPos: {
    x: number;
    y: number;
  };
  gap?: number;
  children: ReactElement | ReactElement[];
}

const StackContent = ({
  stackingDirection = "right",
  offsetX = "left",
  offsetY = "top",
  anchorPos,
  gap = 5,
  children,
}: StackProps) => {
  const { childDimensions } = useStackContext();
  const { stackHeight, stackWidth } = getStackDimensions(
    childDimensions,
    gap,
    stackingDirection
  );
  const childArray = Children.toArray(children) as ReactElement[];

  const childPositions = useMemo(() => {
    if (childDimensions.size === 0) return [];

    const positions: Array<{ x: number; y: number }> = [];
    let currentOffset = 0;

    // When stacking direction is left or up we must reverse the order of the children
    if (stackingDirection === "right" || stackingDirection === "up") {
      childArray.reverse();
    }

    // Calculate relative positions based on stacking direction
    childArray.forEach((_, index) => {
      const dims = childDimensions.get(index) ?? { width: 0, height: 0 };
      switch (stackingDirection) {
        case "right":
          positions.push({ x: currentOffset, y: 0 });
          currentOffset += dims.width + gap;
          break;
        case "left":
          positions.push({ x: -currentOffset, y: 0 });
          currentOffset += dims.width + gap;
          break;
        case "down":
          positions.push({ x: 0, y: currentOffset });
          currentOffset += dims.height + gap;
          break;
        case "up":
          positions.push({ x: 0, y: -currentOffset });
          currentOffset += dims.height + gap;
          break;
      }
    });

    if (stackingDirection === "left") {
      const firstChildWidth = childDimensions.get(0)?.width ?? 0;
      positions.forEach((position) => {
        position.x -= firstChildWidth;
      });
    }
    if (stackingDirection === "up") {
      const firstChildHeight = childDimensions.get(0)?.height ?? 0;
      positions.forEach((position) => {
        position.y -= firstChildHeight;
      });
    }

    return positions;
  }, [childDimensions, childArray, stackingDirection, gap]);

  const effectiveAnchorPos = useMemo(() => {
    return {
      x: anchorPos.x + (offsetX === "left" ? 0 : -stackWidth),
      y: anchorPos.y + (offsetY === "top" ? 0 : -stackHeight),
    };
  }, [anchorPos, offsetX, offsetY, stackWidth, stackHeight]);

  return (
    <g
      transform={`translate(${effectiveAnchorPos.x}, ${effectiveAnchorPos.y})`}
    >
      {childArray.map((child, index) => {
        const position = childPositions[index] || { x: 0, y: 0 };
        return (
          <g key={index} transform={`translate(${position.x}, ${position.y})`}>
            {child}
          </g>
        );
      })}
      {/* Debug */}
      {/* <circle cx={0} cy={0} r={1} fill="red" />
      {childPositions.map((position, index) => {
        return (
          <circle
            key={index}
            cx={position.x}
            cy={position.y}
            r={1}
            fill="blue"
          />
        );
      })} */}
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
