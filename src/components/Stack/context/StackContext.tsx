import { useState, useMemo, ReactNode, useCallback, useRef, useEffect } from "react";
import { StackContext, ChildDimensions } from "@/components/Stack/context/context";

interface StackProviderProps {
  children: ReactNode;
}

export const StackProvider = ({ children }: StackProviderProps) => {
  const [childDimensions, setChildDimensionsState] = useState<
    Map<number, ChildDimensions>
  >(new Map());
  
  const nextIndexRef = useRef(0);

  // Reset the counter on unmount
  useEffect(() => {
    return () => {
      nextIndexRef.current = 0;
    };
  }, []);

  const registerChild = useCallback(() => {
    const index = nextIndexRef.current;
    nextIndexRef.current += 1;
    return index;
  }, []);

  const setChildDimensions = useCallback(
    (index: number, dimensions: ChildDimensions) => {
      setChildDimensionsState((prev) => {
        const newMap = new Map(prev);
        newMap.set(index, dimensions);
        return newMap;
      });
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      childDimensions,
      setChildDimensions,
      registerChild,
    }),
    [childDimensions, setChildDimensions, registerChild]
  );

  return (
    <StackContext.Provider value={contextValue}>
      {children}
    </StackContext.Provider>
  );
};

