export default function Contact(props) {
  return (
    <div >

      <div className="cat-card">
        <img src={props.img} alt="Luna" />

        <h2>{props.name}</h2>

        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>

    </div>
  );
}

