import { useStackChild } from "@/components/Stack/hooks";
import styles from "@/components/Node/Node.module.css";

interface NodeTitleProps {
  title?: string;
  alignmentBaseline?: "auto" | "hanging";
  textAnchor?: "start" | "end";
  className?: string;
}

const NodeText = ({
  title,
  className = styles.nodeText,
  alignmentBaseline = "auto",
  textAnchor = "start",
}: NodeTitleProps) => {
  const { ref } = useStackChild();

  return (
    <text
      ref={ref}
      className={className}
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
