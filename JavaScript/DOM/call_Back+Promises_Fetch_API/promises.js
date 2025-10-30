// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You walked the dog")
//         }, 2000);
//     })
// }

// function CleanTheKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You cleaned the Kitchen")
//         }, 2500);
//     })
// }

// function ThrowOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You threw out the trash")
//         }, 500);
//     })
// }

// walkDog().then(value => { console.log(value); return CleanTheKitchen() })
//     .then(value => { console.log(value); return ThrowOutTrash() })
//     .then(value => { console.log(value); console.log('All tasks are finished'); })




// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("User data loaded!"), 2000);
//     });
// }


// getUser()
//     .then(data => console.log(data))
//     .finally(console.log("Operation Completed!!"))


// function fetchData(success) {
//     return new Promise((resolve, reject) => {
//         success = true
//         setTimeout(() => {
//             if (success) resolve("Data fetched successfully!");
//             else reject("Fetch failed!");
//         }, 1500);
//     });
// }

// fetchData()
//     .then(data => console.log(data))
//     .finally("Done fetching!")


// const fetch_data = new Promise((resolve, reject) => {
//     console.log('fetching data from server...');
//     const success = Math.random() > 0.5
//     setTimeout(() => {
//         if (success) {
//             console.log('Data fetched, now showing...');
//             const data = { name: "Alice", age: 24 }
//             resolve(data)
//         }
//         else {
//             reject('User Not Found!');
//         }
//     }, 2000);
// })

// fetch_data
//     .then(info => console.log(info))
//     .catch(error => console.error(error))
//     .finally(() => console.log("Operation Completed!"))

// function step1(){
// return new Promise((resolve) => {
//     console.log('step 1 Started');
//     setTimeout(() => {
//         resolve("Step 1 Completed")
//     }, 1000);
// })
// }
// function step2(){
// return new Promise((resolve) => {
//     console.log('step 2 Started');
//     setTimeout(() => {
//         resolve("Step 2 Completed")
//     }, 1000);
// })
// }

// function step3(){
// return new Promise((resolve) => {
//     console.log('step 3 Started');
//     setTimeout(() => {
//         resolve("Step 3 Completed")
//     }, 1000);
    
    
// })
// }

// step1()
//     .then(data1 => {
//         console.log(data1);
//         return step2()
//     })
//     .then(data2 => {
//         console.log(data2);
//         return step3()
//     })
//     .then(data3 => {
//         console.log(data3);
//         console.log('All Steps finished');
//     })
//     .finally(() => {
//         console.log("Process finished");
//     })

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     if (userId === 1) {
//       const data = { id: 1, name: "Alice" };
//       resolve(data);
//     } else {
//       reject("User not found");
//     }
//   });
// }

// function getPosts(userId) {
//   return new Promise((resolve, reject) => {
//     if (userId === 1) {
//       const posts = ['Post 1', 'Post 2'];
//       resolve(posts);
//     } else {
//       resolve([]); 
//     }
//   });
// }

// getUser(1)
//   .then(user => {
//     console.log("User:", user);
//     return getPosts(user.id);
//   })
//   .then(posts => {
//     console.log("Posts:", posts);
//     console.log("Process Finished");
//   })
//   .catch(() => {
//     console.log("Workflow Failed");
//   });


const p1 = Promise.resolve(21)
const p2 = Promise.resolve(11) // Try adding (.reject and then see the output)
const p3 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(31)
    }, 2000);
})

Promise.all([p1,p2,p3])
.then(result =>console.log("all sucess:",result))
.catch(error => console.log("All errors:",error))


const q1 = new Promise((resolve,reject)=>{setTimeout(() => {
    resolve("Fastest")
}, 1000);}) // Try adding (.reject and then see the output)
const q2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Slowest")
    }, 2000);
})

Promise.race([q1,q2])
.then(result =>console.log("all sucess:",result))
.catch(error => console.log("All errors:",error))
