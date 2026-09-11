import { useState } from "react";
import "./StateObject.css";
import StarState from "./star";

export default function NameCard() {
  const [contact, setContact] = useState({
    name: "John",
    phone: "+1 (212) 555-1212",
    email: "jd@gmail.com",
    isFav: false,
  });

  const toggleFavorite = () => {
    setContact((prevContact) => ({
      ...prevContact,
      isFav: !prevContact.isFav,
    }));
  };

  return (
    <article className="name-card">
      <header className="card-header">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile picture of John Doe"
          className="profile-image"
        />
      </header>

      <StarState
        isFilled={contact.isFav}
        onClick={toggleFavorite}
      />

      <section className="card-info">
        <h2>{contact.name}</h2>

        <address>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </address>
      </section>
    </article>
  );
}