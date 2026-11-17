import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axisTick, tooltipStyle } from "./chartTheme";

interface LineTrendChartProps {
  data: object[];
  xKey: string;
  yKey: string;
  valueFormatter?: (value: number) => string;
}

export const LineTrendChart: React.FC<LineTrendChartProps> = ({
  data,
  xKey,
  yKey,
  valueFormatter,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
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
        <Line
          type="monotone"
          dataKey={yKey}
          stroke="#F59E0B"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5, strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineTrendChart;