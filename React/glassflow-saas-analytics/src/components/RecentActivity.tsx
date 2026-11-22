import React from "react";
import type { ActivityItem } from "../types/activity";
import "./RecentActivity.css";

interface ActivityList {
  activities: ActivityItem[];
}

export const RecentActivity: React.FC<ActivityList> = ({ activities }) => {
  return (
    <section className="recent-activity glass">
      <div className="recent-activity__head">
        <h2 className="recent-activity__title">Recent Activity</h2>
        <p className="recent-activity__subtitle">
          Latest events on your platform
        </p>
      </div>

      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <span
              className={`activity-dot activity-dot--${activity.kind}`}
            ></span>
            <div className="activity-text">
              <p className="activity-line">
                <strong>{activity.user}</strong> {activity.action}
              </p>
              <p className="activity-time">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentActivity;
