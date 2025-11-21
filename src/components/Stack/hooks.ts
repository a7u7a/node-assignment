import { useContext, useEffect } from "react";
import { useSVGMeasure } from "@/lib/useSVGMeasure";
import { StackContext, ChildIndexContext } from "@/components/Stack/context/context";

export const useStackContext = () => {
  const context = useContext(StackContext);
  if (!context) {
    throw new Error("useStackContext must be used within a StackProvider");
  }
  return context;
};

export const useStackChild = () => {
  const { setChildDimensions } = useStackContext();
  const indexContext = useContext(ChildIndexContext);
  
  if (!indexContext) {
    throw new Error("useStackChild must be used within a ChildIndexContext");
  }
  
  const { index } = indexContext;
  const [ref, bounds] = useSVGMeasure();

  useEffect(() => {
    setChildDimensions(index, {
      width: bounds.width,
      height: bounds.height,
    });
  }, [setChildDimensions, index, bounds.width, bounds.height]);

  return { ref };
};
