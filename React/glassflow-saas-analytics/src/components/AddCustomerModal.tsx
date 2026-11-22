import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Customer, CustomerPlan } from "../types/customer";
import "./AddCustomerModal.css";

interface AddCustomerModalProps {
  onClose: () => void;
  onAdd: (customer: Customer) => void;
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  plan: CustomerPlan;
}

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  plan: "Free",
};

export const AddCustomerModal: React.FC<AddCustomerModalProps> = ({ onClose, onAdd }) => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState<string | null>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const email = form.email.trim();

    if (!firstName || !lastName) {
      setError("First and last name are required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      firstName,
      lastName,
      email,
      plan: form.plan,
      status: "pending",
      joined: new Date().toISOString().slice(0, 10),
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal glass"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-customer-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__head">
          <h2 id="add-customer-title" className="modal__title">
            Add customer
          </h2>
          <button
            type="button"
            className="modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__row">
            <div className="modal__field">
              <label htmlFor="add-first" className="modal__label">First name</label>
              <input
                id="add-first"
                name="firstName"
                type="text"
                className="modal__input"
                value={form.firstName}
                onChange={handleChange}
                autoFocus
              />
            </div>
            <div className="modal__field">
              <label htmlFor="add-last" className="modal__label">Last name</label>
              <input
                id="add-last"
                name="lastName"
                type="text"
                className="modal__input"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="modal__field">
            <label htmlFor="add-email" className="modal__label">Email</label>
            <input
              id="add-email"
              name="email"
              type="email"
              className="modal__input"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="modal__field">
            <label htmlFor="add-plan" className="modal__label">Plan</label>
            <select
              id="add-plan"
              name="plan"
              className="modal__input"
              value={form.plan}
              onChange={handleChange}
            >
              <option value="Free">Free</option>
              <option value="Pro">Pro</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          {error && (
            <p className="modal__error" role="alert">
              {error}
            </p>
          )}

          <div className="modal__actions">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerModal;