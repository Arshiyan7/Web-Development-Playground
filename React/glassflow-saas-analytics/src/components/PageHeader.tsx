import React from "react";
import "./PageHeader.css";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  action?: React.ReactNode; 
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, action }) => {
  return (
    <div className="page-header">
      <div>
        <h1 className="page-header__title">{title}</h1>
        <p className="page-header__subtitle">{subtitle}</p>
      </div>
      {action && <div className="page-header__action">{action}</div>}
    </div>
  );
};

export default PageHeader;