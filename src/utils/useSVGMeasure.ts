import { useCallback, useEffect, useState, useRef } from "react";

export interface Bounds {
  width: number;
  height: number;
  x: number;
  y: number;
}

/**
 * A hook for measuring SVG elements.
 *
 * For SVGSVGElement with explicit width/height attributes, uses those values.
 * Otherwise, falls back to getBBox() to get dimensions in SVG coordinate space.
 * Measurements are zoom-proof and always return consistent values regardless of transform.
 *
 * @returns [ref, bounds] - A callback ref and the measured bounds
 */
export const useSVGMeasure = (): [
  (element: SVGGraphicsElement | null) => void,
  Bounds
] => {
  const [element, setElement] = useState<SVGGraphicsElement | null>(null);
  const [bounds, setBounds] = useState<Bounds>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const observerRef = useRef<ResizeObserver | null>(null);

  const ref = useCallback((el: SVGGraphicsElement | null) => {
    setElement(el);
  }, []);

  useEffect(() => {
    if (!element) {
      setBounds({ width: 0, height: 0, x: 0, y: 0 });
      return;
    }

    const measureElement = () => {
      try {
        // For SVGSVGElement with explicit width/height
        if (element instanceof SVGSVGElement) {
          const width = element.width.baseVal.value;
          const height = element.height.baseVal.value;

          if (width > 0 && height > 0) {
            // Use explicit dimensions, but still get x/y from getBBox
            const bbox = element.getBBox();
            setBounds({
              width,
              height,
              x: bbox.x,
              y: bbox.y,
            });
            return;
          }
        }

        // Fallback 
        const bbox = element.getBBox();
        setBounds({
          width: bbox.width,
          height: bbox.height,
          x: bbox.x,
          y: bbox.y,
        });
      } catch (e) {
        console.warn("useSVGMeasure: Failed to measure element", e);
        setBounds({ width: 0, height: 0, x: 0, y: 0 });
      }
    };

    measureElement();

    observerRef.current = new ResizeObserver(() => {
      measureElement();
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [element]);

  return [ref, bounds];
};
