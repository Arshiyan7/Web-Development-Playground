import React from "react";
import "./ChartCard.css";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, subtitle, children }) => {
  return (
    <section className="chart-card glass">
      <div className="chart-card__head">
        <h2 className="chart-card__title">{title}</h2>
        {subtitle && <p className="chart-card__subtitle">{subtitle}</p>}
      </div>
      <div className="chart-card__body">{children}</div>
    </section>
  );
};

export default ChartCard;