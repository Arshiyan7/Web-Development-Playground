/* Passing Simple props
import UserCard from './props'
export default function User(){
    const user = {
        name  : "Arsh",
        age : 23,
        role : "Full stack developer"
    }
    return(
        <UserCard
        name = {user.name}
        age = {user.age}
        role = {user.role}
        />     
        )
}*/

// import { useState } from "react";

/* Passing function as props
import { useState } from 'react'
import ChildCount from './props'
export default function ParentCount(){
    const [count, setCount] = useState(0)
    const addCount = () =>{
        setCount(prev => prev + 1)
    }
    return(
        <ChildCount 
        adderFunction = {addCount}
        countValue = {count}
        />
    )
}*/

// Receiving props from Child
// import Child from "./props";
// export default function Parent() {
//   const [input, setInput] = useState("");

//   const HandleChildInput = (value) => {
//     setInput(value);
//   };

//   return (
//     <>
//       <Child OnInputChange={HandleChildInput} />
//       <h1>Hello : {input}</h1>
//     </>
//   );
// }

// Sending multiple data as props to child
// import RoleCard from './props'
// export default function Card(){
//     const [name, setName] = useState('')
//     const [role, setRole] = useState('')

//     const handleNameChange = (name) => {
//         setName(name)
//     }
//     const handleRoleChange = (role) => {
//         setRole(role)
//     }

//     return(
//         <>
//         <RoleCard
//         onChangeName = {handleNameChange}
//         onChangeRole = {handleRoleChange}
//         name = {name}
//         role = {role}
//         />
//         <h1>Name : {name}</h1>
//         <h1>Role : {role}</h1>
//         </>
//     )
// }