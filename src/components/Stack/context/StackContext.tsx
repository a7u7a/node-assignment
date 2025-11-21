import {
  useState,
  useMemo,
  ReactNode,
  useCallback,
} from "react";
import {
  StackContext,
  ChildDimensions,
} from "@/components/Stack/context/context";

interface StackProviderProps {
  children: ReactNode;
}

export const StackProvider = ({ children }: StackProviderProps) => {
  const [childDimensions, setChildDimensionsState] = useState<
    Map<number, ChildDimensions>
  >(new Map());

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
    }),
    [childDimensions, setChildDimensions]
  );

  return (
    <StackContext.Provider value={contextValue}>
      {children}
    </StackContext.Provider>
  );
};
