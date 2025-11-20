import { useContext, useRef, useEffect, useCallback, useState } from "react";
import { StackContext } from "@/components/Stack/context/context";

export const useStackContext = () => {
  const context = useContext(StackContext);
  if (!context) {
    throw new Error("useStackContext must be used within a StackProvider");
  }
  return context;
};

// TO-DO move to lib
export const useStackChild = () => {
  const { setChildDimensions, registerChild } = useStackContext();
  const indexRef = useRef<number | null>(null);
  const [element, setElement] = useState<SVGGraphicsElement | null>(null);

  useEffect(() => {
    if (indexRef.current === null) {
      indexRef.current = registerChild();
    }
  }, [registerChild]);

  const ref = useCallback((el: SVGGraphicsElement | null) => {
    setElement(el);
  }, []);

  // Can't rely on useMeasure here
  // More involved than I would like, but it works
  useEffect(() => {
    if (indexRef.current !== null && element) {
      try {
        const bbox = element.getBBox();
        setChildDimensions(indexRef.current, {
          width: bbox.width,
          height: bbox.height,
        });
      } catch (e) {
        // If getBBox fails, set dimensions to 0
        console.warn("getBBox failed:", e);
        setChildDimensions(indexRef.current, {
          width: 0,
          height: 0,
        });
      }
    }
  }, [setChildDimensions, element]);

  return { ref };
};
