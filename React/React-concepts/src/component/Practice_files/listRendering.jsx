// export default function ListRendering() {
//   const skills = [
//     { id: 1, name: "JavaScript", level: "Strong" },
//     { id: 2, name: "React", level: "Learning" },
//     { id: 3, name: "Python", level: "Strong" },
//     { id: 4, name: "SQL", level: "Intermediate" },
//   ];

//   const skillList = skills.map((skill) => {
//     if (skill.level === "Strong") {
//       return (
//         <h1 key={skill.id}>
//           {skill.name} - {skill.level}
//         </h1>
//       );
//     }
//     return null;
//   });

//   return skillList;
// }

// Conditional Rendering (ternary)
// import Welcome from './welcome'
// import Login from './login'
// export default function ternaryRendering(){
//   const isLoggedIn = true
//   return(
//     <>
//     {isLoggedIn ? <Welcome name = "Arshiyan"/> : <Login/>}
//     </>
//   )
// }