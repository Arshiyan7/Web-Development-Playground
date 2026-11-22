import React from "react";
import { NavLink } from "react-router";
import "./NotFoundView.css";

export const NotFoundView: React.FC = () => {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__text">
        The page you're looking for doesn't exist or was moved.
      </p>
      <NavLink to="/" className="btn btn-primary">
        Back to dashboard
      </NavLink>
    </div>
  );
};

export default NotFoundView;