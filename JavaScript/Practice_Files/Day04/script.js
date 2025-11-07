// console.log('Code Running, OK!!');

// console.log('Simple Promise Function Code');

// function getMessage() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello JavaScript")
//         }, 2000);
//     })
// }

// getMessage()
//     .then(result => console.log(result))

// console.log('\nresolve/reject Promise Function Code');

// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//         if (num > 10) {
//             resolve("Number is large")
//         }
//         else {
//             reject("Number is small")
//         }
//     })
// }

// checkNumber(5)
//     .then(res => console.log(res))
//     .catch(error => console.log(error))
// checkNumber(15)
//     .then(res => console.log(res))
//     .catch(error => console.log(error))

// console.log('\nPromise Chaining Function Code');

// function firstTask(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Step 1 completed")
//         }, 1000);
//     })
// }

// function secondTask(prev_msg){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Step 2 completed after ' + prev_msg);
//         }, 1500);
//     })
// }

// firstTask()
// .then(result =>  secondTask(result))
// .then(msg => console.log(msg))
// .catch(error => console.log(error))

// function loginUser(username) {
//     return new Promise((resolve, reject) => {
//         if (!username) return reject("No username provided!");
//         setTimeout(() => {
//             resolve(`${username} logged In.`)
//         }, 1000);
//     })
// }
// function getUserData(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Fetched Data from ${user}`)
//         }, 1500);
//     })
// }
// function processData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Processed Data ${data}`)
//         }, 1000);
//     })
// }

// loginUser("Arsh")
// .then(name => getUserData(name))
// .then(data => processData(data))
// .then(final => console.log(final))
// .catch(error => console.log(error))

console.log('Promise Methods');

const task1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Task 1 done")
    }, 1000);
})

const task2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Task 2 done")
    }, 2000);
})

const task3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Task 3 done")
    }, 1500);
})

Promise.all([task1,task2,task3])
.then(result => console.log(result))
.catch(error => console.log(error))