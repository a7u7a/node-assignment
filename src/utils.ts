export const getNodePositions = (nodeDimensions: {
  width: number;
  height: number;
}) => {
  const padding = 5;
  const { width, height } = nodeDimensions;
  const rectX = -width / 2;
  const rectY = -height / 2;
  const leftEdge = rectX + padding;
  const rightEdge = rectX + width - padding;
  const topEdge = rectY + padding;
  const bottomEdge = rectY + height - padding;
  const centerX = rectX + width / 2;
  const centerY = rectY + height / 2;
  return {
    rectX,
    rectY,
    leftEdge,
    rightEdge,
    topEdge,
    bottomEdge,
    centerX,
    centerY,
  };
};
