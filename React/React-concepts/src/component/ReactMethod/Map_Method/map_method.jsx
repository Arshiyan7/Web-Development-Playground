// DONT'S FOR PROPS: 
// function sum(a,b){
//     const a = 23 DONT UPDATE THE VALUES IN PROPS INSTEAD UPDATE THE VALUE WHILE SENDING
//     return a+b
// }
// console.log(sum(2,3))

// function Navbar(props){
//     props.Img = 'some other image rather than one we are sending through props'
// }

// export default function Map() {
//     const Pokemons = ['Eternamax', 'Rayquaza', 'Arceus'];
//     const person = {firstName : 'Arshiyan'}

//     return (
//         <>
//             {Pokemons.map((mon, index) => (
//                 <p key={index}>{mon}</p>
//             ))}
//         </>
//     );
// }
// export default function Map() {
//     const Pokemons = ['Eternamax', 'Rayquaza', 'Arceus'];
//     const person = {firstName : 'Arshiyan'}

//     return (
//         <>
//             {Pokemons.map((mon, index) => (
//                 <p key={index}>{mon}</p>
//             ))}
//         </>
//     );
// }

//Rendering Pokemons using props: 
export default function Pokemons(props){
    return(
        <>
        <h1>{props.name}</h1>
        <h2>{props.ability}</h2>
        <h3>{props.weakness}</h3>
        <hr />
        </>
    )
}

// export default function Map(){
//     // const person = {firstName : 'Flex'}
//     const NinjaTur = [
//         <h2>Leonardo</h2>,
//         <h2>Raphael</h2>,
//         <h2>Dontaello</h2>,
//         <h2>Michealangelo</h2>,
//         <h2>Jennika</h2>,
//     ]
//     return(
//         <main>
//             {/* {person} Throws an error because react can only render JSX syntax objects */}
//             {NinjaTur} {/* Now this will work because it is enclosed in JSX syntax */}
//         </main>
//     )
// }