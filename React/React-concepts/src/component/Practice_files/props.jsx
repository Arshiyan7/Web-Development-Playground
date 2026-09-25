// // getting Simple props
// // export default function UserCard({name, age, role}){
// //     return(
// //         <>
// //         <h1>Name : {name}</h1>
// //         <h1>Age : {age}</h1>
// //         <h1>Rule : {role}</h1>
// //         </>
// //     )
// // }

// // getting function as props
// // export default function ChildCount({adderFunction, countValue}){
// //     return(
// //         <>
// //         <h1>{countValue} </h1>
// //         <button onClick={adderFunction}>Click button to add count : </button>
// //         </>
// //     )
// // }

// // sending props to parent
// // export default function Child({ OnInputChange }) {
// //   return (
// //     <input
// //       type="text"
// //       placeholder="Write your name"
// //       onChange={(e) => OnInputChange(e.target.value)}
// //     />
// //   );
// // }

// // Getting multiple data as props from parent
// export default function RoleCard({ onChangeName, onChangeRole, name, role }) {
//   const styles = {
//     padding: "10px 12px",
//     backgroundColor: "#f5f5f5",
//     border: "1px solid #ccc",
//     borderRadius: "6px",

//   };
//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         placeholder="Write your name..."
//         onChange={(e) => onChangeName(e.target.value)}
//         style={styles}
//       />
//       <input
//         type="text"
//         value={role}
//         placeholder="Write your role in tech..."
//         onChange={(e) => onChangeRole(e.target.value)}
//         style={styles}
//       />
//     </>
//   );
// }
