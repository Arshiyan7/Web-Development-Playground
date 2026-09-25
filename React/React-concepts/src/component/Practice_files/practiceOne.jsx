// React Practice:
// - useEffect: intervals, event listeners, cleanup, and dependencies
// - useRef: DOM references and scrollIntoView()
// - API calls: fetch, async/await, loading/error states, and cleanup
// - Conditional rendering based on component state


// import { useEffect, useRef, useState } from "react";

// UseEffects
// export default function Clock() {
//   const [time, setTime] = useState(new Date());
//   const [isRunning, setIsRunning] = useState(true);

//   useEffect(() => {
//     if (!isRunning) return;

//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isRunning]);

//   return (
//     <>
//       <h1>{time.toLocaleTimeString()}</h1>

//       <button onClick={() => setIsRunning(prev => !prev)}>
//         {isRunning ? "Pause" : "Resume"}
//       </button>
//     </>
//   );
// }

// export default function Activity() {
//   const [status, setStatus] = useState("Offline");

//   useEffect(() => {
//     function handleOnline() {
//       setStatus("Online");
//     }

//     function handleOffline() {
//       setStatus("Offline");
//     }

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   return <h1>{status}</h1>;
//}

// UseRefs
// export default function User() {
//   const scrollToParagraph = useRef(null);
//   const ToParagraph = () => {
//     scrollToParagraph.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div style={{ height: "100vh" }}>
//       <input type="text" />
//       <button onClick={ToParagraph}>Click to scroll to paragraph</button>
//       <p ref={scrollToParagraph}>
//         Itachi was right in choosing to sacrifice his own reputation, happiness,
//         and even his relationship with Sasuke to prevent a devastating civil war
//         and protect the people he loved. He understood that the Uchiha coup
//         could lead to massive bloodshed and potentially destroy Konoha, so he
//         made the impossible choice of carrying the burden himself rather than
//         allowing thousands of innocent people to suffer. What makes Itachi’s
//         decision tragic is that he knew he would be hated by the person he cared
//         about most, yet he accepted that hatred if it meant Sasuke could
//         survive. His methods were undeniably cruel and morally complicated, but
//         given the choices presented to him, Itachi chose the path that he
//         believed would minimize the loss of innocent lives. He wasn't trying to
//         be a hero—he deliberately made himself look like a villain so that
//         Sasuke could live.
//       </p>
//     </div>
//   );
// }

// API (Fetch)
// export default function APIfetch() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function getData() {
//       try {
//         const api = fetch("https://jsonplaceholder.typicode.com/users/7");
//         const fetchData = await api;
//         if (!fetchData.ok) {
//           throw new Error("Something went wrong");
//         }
//         const result = await fetchData.json();
//         setUser(result.username);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getData();
//   }, []);

//   function renderContent() {
//     if (isLoading) {
//       return "Loading...";
//     }

//     if (error) {
//       return error.message;
//     }

//     return user;
//   }
//   return <h1>{renderContent()}</h1>;
// }
