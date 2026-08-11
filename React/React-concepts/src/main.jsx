// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

// Challenges:
// 11/8/2025 --
// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <h1>Hello my name is Arshiyan</h1><h2>I am Excited to learn React JS</h2>
//   </>,
// );

// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <h1>why i want to learn REACT</h1>
//     <ul>
//       <li>I want to build interactive application</li>
//       <li>
//         I want to explore new features that can help me save my time and do big
//         tasks on little efforts
//       </li>
//       <li>Curiosity i suppose!</li>
//     </ul>
//   </>,
// );

// -- Component Making --
// import "bootstrap/dist/css/bootstrap.min.css"
// import { createRoot } from "react-dom/client"

// function MainComponent() {
//   return (
//     <>
//       <nav className="navbar navbar-dark bg-dark">
//         <div className="container">
//           <span className="navbar-brand">My Navbar</span>
//         </div>
//       </nav>

//       <nav className="navbar navbar-dark bg-primary">
//         <div className="container">
//           <span className="navbar-brand">Another Navbar</span>
//         </div>
//       </nav>
//     </>
//   )
// }

// const root = createRoot(document.getElementById("root"))
// root.render(<MainComponent />)

// -- JS in React 
// import { createRoot } from "react-dom/client";
// const root = document.getElementById('root')

// const h1 = document.createElement("h1")
// h1.textContent = "Hello, Arshiyan!"
// h1.className = "header"

// root.appendChild(h1)


// import { createRoot } from "react-dom/client"
// import reactLogo from "./assets/react.svg"

// const root = createRoot(document.getElementById("root"))

// root.render(
//   <>
//     <img src={reactLogo} alt="React logo" />
//     <h1>Fun Facts About React</h1>
//     <ul>
//       <li>React was created at Facebook in 2013</li>
//       <li>React isn't technically a framework it's JS focused library</li>
//       <li>JSX isn't HTML</li>
//       <li>React doesn't automatically update the entire page</li>
//       <li>React Native uses React concepts to build mobile apps.</li>
//     </ul>
//   </>
// )

// TILL THIS POINT IT IS NOT EFFECTIVE TO WRITE EVERYTHING INSIDE ROOT.RENDER, WE'LL BE MAKING CUSTOM COMPONENTS NOW!
// (BASICALLY COMPONENTS FOLDER WHICH WILL HAVE FILES FOR EACH FUNCTION AND WE RENDER THEM HERE THEN)