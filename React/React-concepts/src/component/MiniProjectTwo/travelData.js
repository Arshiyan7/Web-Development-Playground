import eifel_tower from "./Photos/eifel.png";
import taj_mahal from "./Photos/taj_mahal.png";
import burj_khalifa from "./Photos/burj_khalifa.jpeg";

const travelData = [
  {
    img: {
      src: eifel_tower,
      alt: "Eiffel Tower",
    },
    CountryName: "France",
    GoogleMapUrl: {
      href: "https://www.google.com/maps/search/?api=1&query=Eiffel+Tower+Paris",
      target: "_blank",
    },
    placeName: "Eiffel Tower",
    date: "14-May, 2025 - 17-May, 2025",
    description: `The Eiffel Tower is one of the world's most recognizable landmarks
and offers spectacular views across Paris. Visitors can go up to
the second floor or the summit by elevator or stairs.`,
  },

  {
    img: {
      src: taj_mahal,
      alt: "Taj Mahal",
    },
    CountryName: "India",
    GoogleMapUrl: {
      href: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra",
      target: "_blank",
    },
    placeName: "Taj Mahal",
    date: "20-May, 2025 - 23-May, 2025",
    description: `The Taj Mahal is a magnificent white-marble monument in Agra,
built by Emperor Shah Jahan in memory of Mumtaz Mahal. It is a
UNESCO World Heritage Site and is famous for its Mughal
architecture and beautiful gardens.`,
  },

  {
    img: {
      src: burj_khalifa,
      alt: "Burj Khalifa",
    },
    CountryName: "UAE",
    GoogleMapUrl: {
      href: "https://www.google.com/maps/search/?api=1&query=Burj+Khalifa+Dubai",
      target: "_blank",
    },
    placeName: "Burj Khalifa",
    date: "25-May, 2025 - 28-May, 2025",
    description: `The Burj Khalifa in Dubai is the world's tallest building and one
of the city's most famous attractions. Its observation areas
provide impressive views of Dubai's skyline and surrounding
landscape.`,
  },
];

export default travelData;
