const NODE_PADDING = 5;

export const getNodeContentArea = (nodeDimensions: {
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
