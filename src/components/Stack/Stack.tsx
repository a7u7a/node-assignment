import { Children, ReactElement, ReactNode, useMemo } from "react";
import { StackProvider } from "@/components/Stack/context/StackContext";
import { useStackContext } from "@/components/Stack/hooks";
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
  children?: ReactNode;
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

    // Calculate relative positions based on stacking direction
    childArray.forEach((_, index) => {
      const dims = childDimensions.get(index) ?? { width: 0, height: 0 };
      const currentGap = index === childArray.length - 1 ? 0 : gap;
      switch (stackingDirection) {
        case "right":
          positions.push({ x: currentOffset, y: 0 });
          currentOffset += dims.width + currentGap;
          break;
        case "left":
          positions.push({ x: -currentOffset, y: 0 });
          currentOffset += dims.width + currentGap;
          break;
        case "down":
          positions.push({ x: 0, y: currentOffset });
          currentOffset += dims.height + currentGap;
          break;
        case "up":
          positions.push({ x: 0, y: -currentOffset });
          currentOffset += dims.height + currentGap;
          break;
      }
    });

    if (stackingDirection === "left") {
      positions.forEach((position, index) => {
        const width = childDimensions.get(index)?.width ?? 0;
        position.x -= width;
      });
    }
    if (stackingDirection === "up") {
      positions.forEach((position, index) => {
        const height = childDimensions.get(index)?.height ?? 0;
        position.y -= height;
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
