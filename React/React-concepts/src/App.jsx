// Passing Props Practice
// import Practice from './component/practice'
// import luna from './component/MiniProjectThree/photos/Luna.jpg'
// import Happy from './component/MiniProjectThree/photos/Happy.webp'
// import Contacts from './component/MiniProjectThree/contacts'

// export default function App() {
//   return (
//     // <div className="contacts">
//     //   <Contacts
//     //   img={luna}
//     //   name='Luna'
//     //   phone='0300-PAW-LUNA'
//     //   email='luna.purrfect@gmail.com'
//     //   // Passing Boolean and Numeric values to props
//     //   isCat = {true}
//     //   upVote = {10}
//     //   comments = {[
//     //     {'Author' : '', 'Text' : '', 'Title' : ''},  // prop such as comments can be a bit confusing
//     //     {'Author' : '', 'Text' : '', 'Title' : ''}
//     //   ]}
//     //   />
//     //   <Contacts
//     //   img={Happy}
//     //   name='Happy'
//     //   phone='0300-MEOW-HAPPY'
//     //   email='happy.pawsome@gmail.com'
//     //   />
//     // </div>
//  );
// }

// Applying .map and passing data as props in my travel journal
// import Header from "./component/MiniProjectTwo/Header";
// import travelData from "./component/MiniProjectTwo/travelData";
// import About from "./component/MiniProjectTwo/About";

// export default function App_two(){

//   const travel = travelData.map((data)=>{
//     return(
//       <About
//     key = {data.placeName} // Good practice
//     img = {data.img}
//     CountryName = {data.CountryName}
//     GoogleMapUrl = {data.GoogleMapUrl}
//     placeName = {data.placeName}
//     date = {data.date}
//     description = {data.description}
//     />
//     )
//   })

//   return(
//     <div className="sections">
//       <Header />
//       {travel}
//     </div>
//   )
// }


// import Map_component from './component/MapMethod/map_method'
// import Pokemons from './component/MapMethod/map_method';
// import pokemons from './component/MapMethod/pokemons'
// .Map Practice
// export default function Map() {
//   const mon = pokemons.map((mons) => {
//     return (
//       <Pokemons
//         name={mons.name}
//         ability={mons.ability}
//         weakness={mons.weakness}
//       />
//     );
//   });

//   return (
//     <>
//       {mon}
//     </>
//   );
// }

// import Header from './component/MiniProjectFour/header'
// import About from './component/MiniProjectFour/contents'

// export default function App(){
//   return(
//     <div className="section">
//       <Header/>
//       <About/>
//     </div>
//   )
// }

import State from './component/ReactMethod/States/useState'
export default function App(){
  return(
    <div className="section">
      <State/>
    </div>
  )
}