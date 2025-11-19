import { useState } from "react";
import { Node as NodeType } from "../../types";
import { getState } from "../../utils";
import styles from "./Node.module.css";

interface NodeProps {
  data: NodeType;
  x?: number;
  y?: number;
}

const Node = ({ data, x = 0, y = 0 }: NodeProps) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const state = getState(data);
  const { title } = data;

  const nodeClass = `${styles.node} ${styles[state]} ${
    hovered ? styles.nodeHovered : ""
  } ${selected ? styles.selected : ""}`;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className={nodeClass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setSelected(true)}
      onClick={() => setSelected(!selected)}
    >
      <rect
        className={styles.nodeRect}
        x={-75}
        y={-40}
        width={150}
        height={80}
        rx={8}
      />
      <text className={styles.nodeText} x={0} y={5} textAnchor="middle">
        {title}
      </text>
    </g>
  );
};

export default Node;
