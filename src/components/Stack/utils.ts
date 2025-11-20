import { ChildDimensions } from "@/components/Stack/context/context";

export const getStackDimensions = (
  childDimensions: Map<number, ChildDimensions>,
  gap: number,
  stackingDirection: "right" | "left" | "up" | "down"
) => {
  let stackHeight = 0,
    stackWidth = 0;

  const isHorizontal =
    stackingDirection === "right" || stackingDirection === "left";

  if (isHorizontal) {
    stackHeight = Math.max(
      ...Array.from(childDimensions.values()).map((d) => d.height)
    );
    stackWidth = Array.from(childDimensions.values()).reduce(
      (acc, dims) => acc + dims.width,
      0
    );
    stackWidth += (childDimensions.size - 1) * gap;
    return { stackHeight, stackWidth };
  } else {
    stackWidth = Math.max(
      ...Array.from(childDimensions.values()).map((d) => d.width)
    );
    stackHeight = Array.from(childDimensions.values()).reduce(
      (acc, dims) => acc + dims.height,
      0
    );
    stackHeight += (childDimensions.size - 1) * gap;
    return { stackHeight, stackWidth };
  }
};
