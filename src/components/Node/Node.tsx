import { Node as NodeType } from "../../types";

interface NodeProps {
  data: NodeType;
  x?: number;
  y?: number;
}

const Node = ({ data, x = 0, y = 0 }: NodeProps) => {
  const { title } = data;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={-75}
        y={-40}
        width={150}
        height={80}
        rx={8}
        fill="#ffffff"
        stroke="#000000"
        strokeWidth={2}
      />
      <text
        x={0}
        y={5}
        textAnchor="middle"
        fill="#000000"
        fontSize={14}
        fontFamily="sans-serif"
      >
        {title}
      </text>
    </g>
  );
};

export default Node;
