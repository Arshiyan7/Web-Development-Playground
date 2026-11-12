import React, { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import { ArrowDownAZ, ArrowUpZA } from "lucide-react";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import { customers } from "../data/customers";
import "./CustomersView.css";

type SortOrder = "asc" | "desc";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const CustomersView: React.FC = () => {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = customers.filter((c) =>
      `${c.firstName} ${c.lastName} ${c.email}`.toLowerCase().includes(q),
    );
    return [...filtered].sort((a, b) =>
      sortOrder === "asc"
        ? a.firstName.localeCompare(b.firstName)
        : b.firstName.localeCompare(a.firstName),
    );
  }, [query, sortOrder]);

  return (
    <div className="customers-view">
      <PageHeader
        title="Customers"
        subtitle="Manage and review everyone using your platform"
        action={
          <button className="btn btn-primary">
            <Plus size={16} />
            Add customer
          </button>
        }
      />
      <div className="customers-toolbar">
        <label className="customers-search">
          <input
            type="text"
            className="customers-search__input"
            placeholder="Search by name or email"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="customers-search__icon" />
        </label>
        <button
          className="customers-sort"
          onClick={() => setSortOrder((o) => (o === "asc" ? "desc" : "asc"))}
          aria-label={`Sort by first name, currently ${sortOrder === "asc" ? "A to Z" : "Z to A"}`}
        >
          {sortOrder === "asc" ? (
            <ArrowDownAZ size={18} />
          ) : (
            <ArrowUpZA size={18} />
          )}
        </button>
      </div>

      <div className="customers-card glass">
        <div className="customers-table-wrap">
          <table className="customers-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 ? (
                <tr>
                  <td colSpan={4} className="customers-empty">
                    No customers match "{query}"
                  </td>
                </tr>
              ) : (
                visible.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <div className="customer-cell">
                        <div className="customer-avatar">
                          {c.firstName[0]}
                          {c.lastName[0]}
                        </div>
                        <div className="customer-text">
                          <p className="customer-name">
                            {c.firstName} {c.lastName}
                          </p>
                          <p className="customer-email">{c.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="customer-plan">{c.plan}</td>
                    <td>
                      <StatusBadge status={c.status} />
                    </td>
                    <td className="customer-date">{formatDate(c.joined)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="customers-footer">
          Showing {visible.length} of {customers.length} customers
        </div>
      </div>
    </div>
  );
};

export default CustomersView;
