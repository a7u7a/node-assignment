import { ReactNode, useRef, useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { zoom, ZoomBehavior, D3ZoomEvent } from "d3-zoom";
import { select } from "d3-selection";
import styles from "@/components/Canvas/Canvas.module.css";

interface CanvasProps {
  children: ReactNode;
}

const Canvas = ({ children }: CanvasProps) => {
  const [ref, bounds] = useMeasure();
  const { width, height } = bounds;
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const svgRef = useRef<SVGSVGElement>(null);
  const transformGroupRef = useRef<SVGGElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });

  useEffect(() => {
    if (!svgRef.current || !transformGroupRef.current) return;

    const svg = select(svgRef.current);

    const zoomBehavior: ZoomBehavior<SVGSVGElement, unknown> = zoom<
      SVGSVGElement,
      unknown
    >()
      .scaleExtent([0.1, 3])
      .filter((event) => !(event.target as Element).closest("[data-node]"))
      .on("zoom", (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
        const { x, y, k } = event.transform;
        setTransform({ x, y, k });
      });

    svg.call(zoomBehavior);

    return () => {
      svg.on(".zoom", null);
    };
  }, [svgRef, transformGroupRef]);

  return (
    <div className={styles.canvasContainer} ref={ref}>
      <svg
        ref={svgRef}
        className={styles.canvas}
        viewBox={`${-halfWidth} ${-halfHeight} ${width} ${height}`}
      >
        <g
          ref={transformGroupRef}
          transform={`translate(${transform.x}, ${transform.y}) scale(${transform.k})`}
        >
          {children}
        </g>
      </svg>
    </div>
  );
};

export default Canvas;
