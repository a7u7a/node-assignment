import { ChildDimensions } from "./context/context";

export const getStackWidth = (
  childDimensions: Map<number, ChildDimensions>
) => {
  return Array.from(childDimensions.values()).reduce(
    (acc, dims) => acc + dims.width,
    0
  );
};

export const getStackHeight = (
  childDimensions: Map<number, ChildDimensions>
) => {
  return Array.from(childDimensions.values()).reduce(
    (acc, dims) => acc + dims.height,
    0
  );
};
