import { useContext, useRef, useEffect } from "react";
import useMeasure from "react-use-measure";
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

  useEffect(() => {
    if (indexRef.current === null) {
      indexRef.current = registerChild();
    }
  }, [registerChild]);

  const [ref, bounds] = useMeasure();

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
