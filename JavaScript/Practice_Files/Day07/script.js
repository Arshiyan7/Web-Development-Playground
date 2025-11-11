console.log('Code Running, OK');

function study() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Finished Studying")
        }, 1500);
    })
}

async function dailyroutine() {
    const finished = await study()
    console.log(finished);
}
dailyroutine()


function eat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Eating breakfast')
        }, 1000);
    })
}

function shower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Taking shower')
        }, 1200);
    })
}

function dress() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('getting dressed')
        }, 500);
    })
}

async function morningRoutine(){
    const eat_ = await eat()
    console.log(eat_);

    const shower_ = await shower()
    console.log(shower_);

    const dress_ = await dress()
    console.log(dress_);

    console.log('Morning Routine Complete!');
}
// morningRoutine()

console.log('\nRunning Above code in parallel order using (all) promise method');

async function Morningroutine() {
    const in_parallel = await Promise.all([eat(),shower(),dress()])
    console.log(in_parallel);
    console.log('All result log, DONE');
}
Morningroutine()

// async function getUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log('Error',error);
        
//     }
// }
// getUser()

const newPost = {
    title: "My First Post",
    body: "This is the content of my first post using fetch and async/await."
};

async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newPost)
        });

        const data = await response.json();
        console.log('Post Created:', data);

    } catch (error) {
        console.log('Error', error);
    }
}

createPost();

