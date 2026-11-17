import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axisTick, tooltipStyle } from "./chartTheme";

interface BarBreakdownChartProps {
  data: object[];
  xKey: string;
  yKey: string;
  valueFormatter?: (value: number) => string;
}

export const BarBreakdownChart: React.FC<BarBreakdownChartProps> = ({
  data,
  xKey,
  yKey,
  valueFormatter,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
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
          cursor={{ fill: "rgba(255,255,255,0.05)" }}
          formatter={(value) => (valueFormatter ? valueFormatter(Number(value)) : String(value))}
        />
        <Bar dataKey={yKey} fill="#38BDF8" radius={[6, 6, 0, 0]} maxBarSize={48} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarBreakdownChart;