import styles from "../Node.module.css";
import { useStackChild } from "../../../hooks";
interface NodeTitleProps {
  title?: string;
}

const NodeTitle = ({ title }: NodeTitleProps) => {
  const { ref } = useStackChild();

  return (
    <text ref={ref} className={styles.nodeText} x={0} y={0} textAnchor="start">
      {title}
    </text>
  );
};
export default NodeTitle;
