// export default function Contact(props) {
//   return (
//     <div >

//       <div className="cat-card">
//         <img src={props.img} alt={props.name} />

//         <h2>{props.name}</h2>

//         <p>{props.phone}</p>
//         <p>{props.email}</p>
//       </div>

//     </div>
//   );
// }

// Destructuring props
export default function Contact({name, img, phone, email}) {
  return (
    <div >

      <div className="cat-card">
        <img style={{display: img ? 'block' : 'inline'}} src={img} alt={name} /> // conditional rendering 

        <h2>{name}</h2>

        <p>{phone}</p>
        <p>{email}</p>
      </div>

    </div>
  );
}

