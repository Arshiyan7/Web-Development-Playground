export default function StarState({ isFilled, onClick }) {
  return (
    <i
      onClick={onClick}
      className={`favorite-star ${
        isFilled ? "fa-solid fa-star" : "fa-regular fa-star"
      }`}
    ></i>
  );
}
