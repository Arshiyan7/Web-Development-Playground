import Header from "./component/MiniProjectTwo/Header";
import About from "./component/MiniProjectTwo/About";
import eifel_tower from "./component/MiniProjectTwo/Photos/eifel.png";
import taj_mahal from "./component/MiniProjectTwo/Photos/taj_mahal.png";
import burj_khalifa from "./component/MiniProjectTwo/Photos/burj_khalifa.jpeg";

// import Practice from './component/practice'
// import luna from './component/MiniProjectThree/photos/Luna.jpg'
// import Happy from './component/MiniProjectThree/photos/Happy.webp'
// import Contacts from './component/MiniProjectThree/contacts'

export default function App() {
  return (
    // <div className="contacts">
    //   <Contacts
    //   img={luna}
    //   name='Luna'
    //   phone='0300-PAW-LUNA'
    //   email='luna.purrfect@gmail.com'
    //   // Passing Boolean and Numeric values to props
    //   isCat = {true}
    //   upVote = {10}
    //   comments = {[
    //     {'Author' : '', 'Text' : '', 'Title' : ''},  // prop such as comments can be a bit confusing
    //     {'Author' : '', 'Text' : '', 'Title' : ''}
    //   ]}
    //   />
    //   <Contacts
    //   img={Happy}
    //   name='Happy'
    //   phone='0300-MEOW-HAPPY'
    //   email='happy.pawsome@gmail.com'
    //   />
    // </div>
    <div className="sections">
      <Header />
      <About
        img={{
          src: eifel_tower,
          alt: "Eifel Tower",
        }}
        CountryName="France"
        GoogleMapUrl={{
          href: "https://www.google.com/maps/search/?api=1&query=Eiffel+Tower+Paris",
          target: "_blank",
        }}
        placeName="Eifel Tower"
        date="14-May, 2025 - 17-May, 2025"
        description={`The Eiffel Tower is one of the world's most recognizable landmarks
              and offers spectacular views across Paris. Visitors can go up to
              the second floor or the summit by elevator or stairs.`}
      />
      <About
        img={{
          src: taj_mahal,
          alt: "Taj Mahal",
        }}
        CountryName="India"
        GoogleMapUrl={{
          href: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra&utm_source=chatgpt.com",
          target: "_blank",
        }}
        placeName="Taj Mahal"
        date="20-May, 2025 - 23-May, 2025"
        description={`The Taj Mahal is a magnificent white-marble monument in Agra,
              built by Emperor Shah Jahan in memory of Mumtaz Mahal. It is a
              UNESCO World Heritage Site and is famous for its Mughal
              architecture and beautiful gardens.`}
      />
      <About
        img={{
          src: burj_khalifa,
          alt: "Burj Khalifa",
        }}
        CountryName="UAE"
        GoogleMapUrl={{
          href: "https://www.google.com/maps/search/?api=1&query=Burj+Khalifa+Dubai&utm_source=chatgpt.com",
          target: "_blank",
        }}
        placeName="Burj Khalifa"
        date="25-May, 2025 - 28-May, 2025"
        description={`The Burj Khalifa in Dubai is the world's tallest building and one
              of the city's most famous attractions. Its observation areas
              provide impressive views of Dubai's skyline and surrounding
              landscape.`}
      />
      {/* <Practice/> */}
    </div>
  );
}
