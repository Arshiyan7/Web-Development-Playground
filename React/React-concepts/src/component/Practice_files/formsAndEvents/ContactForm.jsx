import { useState } from "react";

export default function Form() {
  const formStyle = {
    width: "350px",
    margin: "40px auto",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f8f8f8",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "100px",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "10px",
    marginTop: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChangeName = (name) => {
    setName(name);
  };
  const onChangeEmail = (email) => {
    setEmail(email);
  };
  const onChangeMessage = (message) => {
    setMessage(message);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(message);
  };

  return (
    <form style={formStyle} onSubmit={HandleSubmit}>
      <label>Name</label>
      <input
        style={inputStyle}
        value={name}
        type="text"
        placeholder="Write your name..."
        onChange={(e) => onChangeName(e.currentTarget.value)}
      />

      <label>Email</label>
      <input
        style={inputStyle}
        value={email}
        type="email"
        placeholder="Write your email..."
        onChange={(e) => onChangeEmail(e.currentTarget.value)}
      />

      <label>Message</label>
      <textarea
        style={textareaStyle}
        value={message}
        onChange={(e) => onChangeMessage(e.currentTarget.value)}
      />
      <button style={buttonStyle} type="submit">
        Submit
      </button>
    </form>
  );
}
