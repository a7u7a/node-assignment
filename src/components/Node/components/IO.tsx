import IOButton from "./IOButton";
import Stack from "@/components/Stack";
import { useNodeContext } from "@/components/Node/context/useNodeContext";
import DebugRect from "@/components/Node/components/DebugRect";
import { useControls } from "leva";
import { useMemo } from "react";

const IO = () => {
  const { nodePositions } = useNodeContext();
  const { IOTopEdge, IOLeftEdge, IORightEdge, bottomEdge } = nodePositions;

  const { numInputs, numOutputs } = useControls("Node IO", {
    numInputs: { options: [0, 1, 2, 3], value: 1, label: "Inputs" },
    numOutputs: { options: [0, 1, 2, 3], value: 1, label: "Outputs" },
  });

  const inputs = useMemo(
    () =>
      Array.from({ length: numInputs }, (_, i) => (
        <IOButton key={`input-${i}`} type="input" />
      )),
    [numInputs]
  );

  const outputs = useMemo(
    () =>
      Array.from({ length: numOutputs }, (_, i) => (
        <IOButton key={`output-${i}`} type="output" />
      )),
    [numOutputs]
  );

  return (
    <>
      {/* Inputs */}
      <Stack
        stackingDirection="down"
        offsetX="right"
        anchorPos={{ x: IOLeftEdge, y: IOTopEdge }}
      >
        {inputs}
      </Stack>

      {/* Outputs */}
      <Stack
        stackingDirection="down"
        anchorPos={{ x: IORightEdge, y: IOTopEdge }}
      >
        {outputs}
      </Stack>

      <DebugRect
        x={IOLeftEdge}
        y={IOTopEdge}
        width={IORightEdge - IOLeftEdge}
        height={bottomEdge - IOTopEdge}
        color="green"
      />
    </>
  );
};

export default IO;
