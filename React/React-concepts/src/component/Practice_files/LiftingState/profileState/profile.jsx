export default function UserProfile({ name, role, image }) {
  const containerStyle = {
    width: "300px",
    padding: "20px",
    marginTop: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "50%",
  };

  const headingStyle = {
    margin: "10px 0",
  };

  return (
    <div style={containerStyle}>
      <img src={image} alt="Profile" style={imageStyle} />
      <h1 style={headingStyle}>Name: {name}</h1>
      <h2 style={headingStyle}>Role: {role}</h2>
    </div>
  );
}