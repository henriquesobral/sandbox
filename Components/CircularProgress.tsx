import React, { useEffect, useState, useRef } from "react";
import { useStyletron } from "baseui";
import { Check, Delete } from "baseui/icon";

interface CircularProgressProps {
  size: number;
  progress: number;
  strokeWidth: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size,
  progress,
  strokeWidth
}) => {
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const [offset, setOffset] = useState(
    ((100 - progress) / 100) * circumference
  );
  const [css, theme] = useStyletron();

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [circumference, progress, offset]);

  return (
    <>
      <svg
        className={css({
          display: "block",
          margin: "20px auto",
          maxWidth: "100%"
        })}
        width={size}
        height={size}
      >
        <circle
          className={css({
            fill: "none"
          })}
          stroke={theme.colors.primary200}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className={css({
            fill: "none",
            transition: "stroke-dashoffset 850ms ease-in-out"
          })}
          stroke={theme.colors.accent}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x={`${center}`}
          y={`${center * 1.244}`}
          className={css({
            textAnchor: "middle",
            fill: theme.colors.primary300,
            ...theme.typography.LabelLarge,
            fontSize: `${size * 0.375}px`,
            lineHeight: `${size}px`,
            fontFamily: "sans-serif"
          })}
        >
          {progress}
        </text>
      </svg>
    </>
  );
};

export default CircularProgress;
