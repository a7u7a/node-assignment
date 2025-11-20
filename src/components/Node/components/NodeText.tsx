import styles from "@/components/Node/Node.module.css";
import { useStackChild } from "@/components/Stack/hooks";

interface NodeTitleProps {
  title?: string;
}

const NodeText = ({ title }: NodeTitleProps) => {
  const { ref } = useStackChild();

  return (
    <text ref={ref} className={styles.nodeText} x={0} y={0} textAnchor="start">
      {title}
    </text>
  );
};
export default NodeText;
