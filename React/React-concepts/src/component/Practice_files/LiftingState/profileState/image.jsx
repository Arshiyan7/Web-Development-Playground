export default function Image({ onChangeImage }) {
  return <input type="text"
  placeholder="Give image path /"
   onChange={(e) => onChangeImage(e.target.value)} />;
}
