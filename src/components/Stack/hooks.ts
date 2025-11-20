import { useContext, useRef, useEffect } from "react";
import { useSVGMeasure } from "@/utils/useSVGMeasure";
import { StackContext } from "@/components/Stack/context/context";

export const useStackContext = () => {
  const context = useContext(StackContext);
  if (!context) {
    throw new Error("useStackContext must be used within a StackProvider");
  }
  return context;
};

export const useStackChild = () => {
  const { setChildDimensions, registerChild } = useStackContext();
  const indexRef = useRef<number | null>(null);
  const [ref, bounds] = useSVGMeasure();

  useEffect(() => {
    if (indexRef.current === null) {
      indexRef.current = registerChild();
    }
  }, [registerChild]);

  useEffect(() => {
    if (indexRef.current !== null) {
      setChildDimensions(indexRef.current, {
        width: bounds.width,
        height: bounds.height,
      });
    }
  }, [setChildDimensions, bounds.width, bounds.height]);

  return { ref };
};
