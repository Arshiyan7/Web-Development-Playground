import eifel from "./Photos/eifel.png";
import taj_mahal from "./Photos/taj_mahal.png";
import burj_khalifa from "./Photos/burj_khalifa.jpeg";
export default function About() {
  return (
    <article className="Journal-entry">
      <div className="sections">
        <div className="entry">
          <div className="image-container">
            <img className="img-fr" src={eifel} alt="Eiffel Tower" />
          </div>

          <div className="About">
            <i className="fa-solid fa-location-dot"></i>
            <span className="Fr">France</span>
            <a href="https://www.google.com/maps/search/?api=1&query=Eiffel+Tower+Paris" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
            

            <h1>Eiffel Tower</h1>
            <p className="date">14-May, 2025 - 17-May, 2025</p>
            <p className="description">
              The Eiffel Tower is one of the world's most recognizable landmarks
              and offers spectacular views across Paris. Visitors can go up to
              the second floor or the summit by elevator or stairs.
            </p>
          </div>
        </div>

        <div className="entry">
          <div className="image-container">
            <img className="img-fr" src={taj_mahal} alt="Taj Mahal" />
          </div>

          <div className="About">
            <i className="fa-solid fa-location-dot"></i>
            <span className="In">India</span>
            <a href="https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">View on Google Maps</a>

            <h1>Taj Mahal</h1>
            <p className="date">20-May, 2025 - 23-May, 2025</p>
            <p className="description">
              The Taj Mahal is a magnificent white-marble monument in Agra,
              built by Emperor Shah Jahan in memory of Mumtaz Mahal. It is a
              UNESCO World Heritage Site and is famous for its Mughal
              architecture and beautiful gardens.
            </p>
          </div>
        </div>

        <div className="entry">
          <div className="image-container">
            <img className="img-fr" src={burj_khalifa} alt="Burj Khalifa" />
          </div>

          <div className="About">
            <i className="fa-solid fa-location-dot"></i>
            <span className="UAE">UAE</span>
            <a href="https://www.google.com/maps/search/?api=1&query=Burj+Khalifa+Dubai&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" >View on Google Maps</a>

            <h1>Burj Khalifa</h1>
            <p className="date">25-May, 2025 - 28-May, 2025</p>
            <p className="description">
              The Burj Khalifa in Dubai is the world's tallest building and one
              of the city's most famous attractions. Its observation areas
              provide impressive views of Dubai's skyline and surrounding
              landscape.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
