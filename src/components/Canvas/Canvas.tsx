import { ReactNode } from "react";
import useMeasure from "react-use-measure";
import styles from "@/components/Canvas/Canvas.module.css";

interface CanvasProps {
  children: ReactNode;
}

const Canvas = ({ children }: CanvasProps) => {
  const [ref, bounds] = useMeasure();
  const { width, height } = bounds;
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  return (
    <div className={styles.slide} ref={ref}>
      <svg
        className={styles.canvas}
        viewBox={`${-halfWidth} ${-halfHeight} ${width} ${height}`}
        // preserveAspectRatio="xMidYMid meet"
      >
        {children}
      </svg>
    </div>
  );
};

export default Canvas;
