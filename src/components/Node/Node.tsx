import { Node as NodeType } from "../../types";
import { useNodeContext } from "./hooks/useNodeContext";
import styles from "./Node.module.css";

interface NodeProps {
  data: NodeType;
  x?: number;
  y?: number;
}

const NodeContainer = ({ data, x = 0, y = 0 }: NodeProps) => {
  const { title } = data;
  const { hovered, setHovered, selected, setSelected } = useNodeContext();
  const nodeClass = `${styles.node} ${hovered ? styles.nodeHovered : ""}}`;

  // const nodeClass = `${styles.node} ${hovered ? styles.nodeHovered : ""} ${
  //   selected ? styles.selected : ""
  // }`;

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
      <text className={styles.codeText} x={0} y={20} textAnchor="middle">
        Subtitle
      </text>
    </g>
  );
};

export default NodeContainer;
