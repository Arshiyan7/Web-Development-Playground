export default function About(props) {
  return (
    <article className="Journal-entry">
      <div className="sections">
        <div className="entry">
          <div className="image-container">
            <img className="img-fr" src={props.img.src} alt={props.img.alt} />
          </div>

          <div className="About">
            <i className="fa-solid fa-location-dot"></i>
            <span className="Fr">{props.CountryName}</span>
            <a href={props.GoogleMapUrl.href} target={props.GoogleMapUrl.target} rel="noopener noreferrer">
              View on Google Maps
            </a>
            

            <h1>{props.placename}</h1>
            <p className="date">{props.date}</p>
            <p className="description">{props.description}</p>
          </div>
        </div>
        </div>
    </article>
  );
}
