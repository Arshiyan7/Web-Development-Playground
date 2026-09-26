export default function Role({ onChangeRole }) {
  return (
    <input
      type="text"
      placeholder="Write your Role..."
      onChange={(e) => {
        onChangeRole(e.target.value);
      }}
    />
  );
}
