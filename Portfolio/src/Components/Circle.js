import React, { useEffect, useState } from 'react';

function ProgressiveCircle({ targetPercent = 50, size = 120, strokeWidth = 5, color = '#00f4ff', maxVisiblePercent = 80 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = () => {
      if (current <= targetPercent) {
        setProgress(current);
        current++;
        requestAnimationFrame(step);
      }
    };
    step();
  }, [targetPercent]);

  const maxStrokeLength = (maxVisiblePercent / 100) * circumference;
  const emptyStrokeLength = circumference - maxStrokeLength;

  const progressLength = (progress / 100) * maxStrokeLength;
  const strokeDashoffset = circumference - progressLength;

  // For background circle: show only maxVisiblePercent arc, rest transparent
  // strokeDasharray = [arc length to show, rest]
  // strokeDashoffset to start at top (-90deg rotation)
  const bgStrokeDasharray = `${maxStrokeLength} ${emptyStrokeLength}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background circle with partial arc */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#eee"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={bgStrokeDasharray}
        strokeDashoffset={emptyStrokeLength / 2} // center the arc visually
        transform={`rotate(-200 ${size / 2} ${size / 2})`}
      />
      {/* Progress circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-235 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export default ProgressiveCircle;
