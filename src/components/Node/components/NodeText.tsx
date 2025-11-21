import { useStackChild } from "@/components/Stack/hooks";
import styles from "@/components/Node/Node.module.css";

interface NodeTextProps {
  text?: string;
  alignmentBaseline?: "auto" | "hanging";
  textAnchor?: "start" | "end";
  className?: string;
}

const NodeText = ({
  text,
  className = styles.nodeText,
  alignmentBaseline = "auto",
  textAnchor = "start",
}: NodeTextProps) => {
  const { ref } = useStackChild();

  return (
    <text
      ref={ref}
      className={className}
      x={0}
      y={0}
      textAnchor={textAnchor}
      alignmentBaseline={alignmentBaseline}
      style={{ pointerEvents: "none" }}
    >
      {text}
    </text>
  );
};
export default NodeText;
