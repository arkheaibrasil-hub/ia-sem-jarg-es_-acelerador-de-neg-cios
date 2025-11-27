
import React from 'react';

interface ProgressBarProps {
  percentage: number;
  height?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, height = 'h-2' }) => {
  const validPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className={`w-full bg-gray-200 rounded-full ${height} overflow-hidden`}>
      <div
        className="bg-green-500 h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${validPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;