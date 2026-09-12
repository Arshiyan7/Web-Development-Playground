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

//Chef Claude Project
import Header from './component/ClaudeChef/header'
import Contents from './component/ClaudeChef/contents'

export default function App(){
  return(
    <div className="section">
      <Header/>
      <Contents/>
    </div>
  )
}

// State in JSX
// import State from './component/ReactMethod/States/useState'
// export default function App(){
//   return(
//     <div className="section">
//       <State/>
//     </div>
//   )
// }

//State Practice & toggle
// import StatePractice from './component/ReactMethod/States/StatesPractice'
// import StateToggle from './component/ReactMethod/States/StateToggling'

// export default function App(){
//   return(
//       <>
//     {/* <div className="section">
//       <StatePractice/>
//     </div> */}
//     <StateToggle/>
//       </>
//   )
// }

// Practice file (!RELATED TO COURSE)
// import PracticeFile from './component/practice'

// export default function App(){
//   return(
//     <div className="section">
//       <PracticeFile/>
//     </div>
//   )
// }

// Arrays in State:
// import ArrayState from './component/ReactMethod/States/StatesUsingArrays'

// export default function App(){
//   return(
//     <ArrayState/>
//   )
// }

// Objects in State:
// import ObjectState from "./component/ReactMethod/States/StatesAndProps/StatesUsingObject";

// export default function App() {
//   return (
//       <ObjectState />
//   );
// }

// Forms in React
// import Form from './component/Forms/Forms'
// export default function App(){
//   return(
//     <Form/>
//   )
// }

//conditional rendering in React
// import Joke from './component/ConditionalRendering/jokes'

// export default function App(){
//   return(
//     <Joke/>
//   )
// }

//Passing data around React
// import Header from "./component/Passing_Data_inReact/Header";
// import About from "./component/Passing_Data_inReact/About.jsx";
// import { useState } from "react";

// export default function App() {
//   const [name, setName] = useState("John");
//   const [age, setAge] = useState(25);

//   return (
//     <>
//       <Header name={name} />
//       <About age={age} />
//     </>
//   );
// }

//Soundpad Project:
// import SoundPad from "./component/MiniProjectFive/soundPads.jsx"

// export default function App() {
//     return <SoundPad />
// }
