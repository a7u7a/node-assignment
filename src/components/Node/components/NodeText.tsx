import styles from "@/components/Node/Node.module.css";
import { useStackChild } from "@/components/Stack/hooks";

interface NodeTitleProps {
  title?: string;
  alignmentBaseline?: "auto" | "hanging";
  textAnchor?: "start" | "end";
}

const NodeText = ({
  title,
  alignmentBaseline = "auto",
  textAnchor = "start",
}: NodeTitleProps) => {
  const { ref } = useStackChild();

  return (
    <text
      ref={ref}
      className={styles.nodeText}
      x={0}
      y={0}
      textAnchor={textAnchor}
      alignmentBaseline={alignmentBaseline}
    >
      {title}
    </text>
  );
};
export default NodeText;
