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
    
    // Create zoom behavior with constraints
    const zoomBehavior: ZoomBehavior<SVGSVGElement, unknown> = zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 3]) // Min zoom 0.1x, max zoom 3x
      .filter((event) => {
        // Prevent zoom/pan when interacting with nodes
        const target = event.target as Element;
        
        // Check if the target or any of its parents has a node class (CSS modules generate _node_* classes)
        let element: Element | null = target;
        while (element) {
          if (element.classList) {
            // Check for CSS module class that starts with _node_
            for (let i = 0; i < element.classList.length; i++) {
              if (element.classList[i].startsWith('_node_')) {
                return false;
              }
            }
          }
          element = element.parentElement;
        }
        
        // Allow zoom/pan for all other interactions
        return true;
      })
      .on("zoom", (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
        const { x, y, k } = event.transform;
        setTransform({ x, y, k });
      });

    // Apply zoom behavior to SVG
    svg.call(zoomBehavior);

    // Cleanup
    return () => {
      svg.on(".zoom", null);
    };
  }, [svgRef, transformGroupRef]);

  return (
    <div className={styles.slide} ref={ref}>
      <svg
        ref={svgRef}
        className={styles.canvas}
        viewBox={`${-halfWidth} ${-halfHeight} ${width} ${height}`}
        // preserveAspectRatio="xMidYMid meet"
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
