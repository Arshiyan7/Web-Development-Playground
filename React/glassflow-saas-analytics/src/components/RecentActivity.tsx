import React from "react";
import "./RecentActivity.css";

export const RecentActivity: React.FC = () => {
  return (
    <section className="recent-activity glass">
      <div className="recent-activity__head">
        <h2 className="recent-activity__title">Recent Activity</h2>
        <p className="recent-activity__subtitle">Latest events on your platform</p>
      </div>

      <ul className="activity-list">
        {/* TODO (you): replace this sample row with one <li> per item in recentActivity.
            Use the item's `kind` for the dot's modifier class: activity-dot--${kind} */}
        <li className="activity-item">
          <span className="activity-dot activity-dot--upgrade"></span>
          <div className="activity-text">
            <p className="activity-line">
              <strong>Amelia Hart</strong> upgraded to Enterprise
            </p>
            <p className="activity-time">12m ago</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default RecentActivity;