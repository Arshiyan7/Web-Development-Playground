export default function Name({ onChangeName }) {
  return (
    <input
      type="text"
      placeholder="Write your name..."
      onChange={(e) => {
        onChangeName(e.target.value);
      }}
    />
  );
}
