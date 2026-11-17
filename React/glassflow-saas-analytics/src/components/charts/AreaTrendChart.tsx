import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axisTick, tooltipStyle } from "./chartTheme";

interface AreaTrendChartProps {
  data: object[];
  xKey: string;
  yKey: string;
  valueFormatter?: (value: number) => string;
}

export const AreaTrendChart: React.FC<AreaTrendChartProps> = ({
  data,
  xKey,
  yKey,
  valueFormatter,
}) => {
  const gradientId = `gradient-${yKey}`;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818CF8" stopOpacity={0.45} />
            <stop offset="100%" stopColor="#818CF8" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={xKey} tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis
          tick={axisTick}
          axisLine={false}
          tickLine={false}
          width={56}
          tickFormatter={valueFormatter}
        />
        <Tooltip
          {...tooltipStyle}
          cursor={{ stroke: "rgba(255,255,255,0.2)" }}
          formatter={(value) => (valueFormatter ? valueFormatter(Number(value)) : String(value))}
        />
        <Area
          type="monotone"
          dataKey={yKey}
          stroke="#818CF8"
          strokeWidth={2}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaTrendChart;