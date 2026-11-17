import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { tooltipStyle } from "./chartTheme";

const COLORS = ["#818CF8", "#38BDF8", "#F59E0B", "#F43F5E"];

interface DonutChartProps {
  data: object[];
  nameKey: string;
  valueKey: string;
  valueFormatter?: (value: number) => string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  nameKey,
  valueKey,
  valueFormatter,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey={valueKey}
          nameKey={nameKey}
          innerRadius="60%"
          outerRadius="85%"
          paddingAngle={3}
          stroke="none"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          {...tooltipStyle}
          formatter={(value) => (valueFormatter ? valueFormatter(Number(value)) : String(value))}
        />
        <Legend
          verticalAlign="bottom"
          iconType="circle"
          formatter={(value) => (
            <span style={{ color: "rgba(226, 232, 240, 0.7)", fontSize: 13 }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;