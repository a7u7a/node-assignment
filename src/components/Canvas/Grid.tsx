interface GridProps {
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
}

const Grid = ({
  size = 22,
  strokeWidth = 2,
  strokeColor = "#C4C4C4",
}: GridProps) => {
  // Create a large grid that extends far beyond the viewport
  const gridExtent = 10000;
  const halfExtent = gridExtent / 2;

  return (
    <g>
      <defs>
        <pattern
          id="grid-pattern"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect
        x={-halfExtent}
        y={-halfExtent}
        width={gridExtent}
        height={gridExtent}
        fill="url(#grid-pattern)"
      />
    </g>
  );
};

export default Grid;
