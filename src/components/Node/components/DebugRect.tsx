import { useControls } from "leva";

const DebugRect = ({
  x,
  y,
  width,
  height,
  color,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}) => {
  const { debug } = useControls("Settings", {
    debug: { value: false },
  });

  return (
    <>
      {debug && (
        <rect
          pointerEvents="none"
          x={x}
          y={y}
          width={width}
          height={height}
          stroke={color}
          fill="transparent"
          strokeWidth="0.5"
        />
      )}
    </>
  );
};

export default DebugRect;
