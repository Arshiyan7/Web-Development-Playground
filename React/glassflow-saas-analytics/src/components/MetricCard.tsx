import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { MetricCardProps } from "../types/dashboard";
import "./MetricCard.css";

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  isPositive,
}) => {
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const trendClass = isPositive ? "positive" : "negative";

  return (
    <div className="metric-card glass">
      <div className="metric-info">
        <p className="metric-title">{title}</p>
        <p className="metric-value">{value}</p>
        <span className={`metric-change ${trendClass}`} title="vs. last month">
          {change}
        </span>
      </div>

      <div
        className={`metric-trend ${trendClass}`}
        aria-label={`${isPositive ? "Up" : "Down"} ${change} vs. last month`}
      >
        <TrendIcon className="metric-trend-icon" />
      </div>
    </div>
  );
};

export default MetricCard;