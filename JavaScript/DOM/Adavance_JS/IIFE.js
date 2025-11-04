console.log('Code Running, OK!');

async function sleep(){
    return new Promise((resvole, reject)=>{
        setTimeout(() => {
            resvole(45);
        }, 1000);
    })
}

// let a = await sleep()
// let b = await sleep() // ERROR, because we've to make an async function which will invoke our main function
// But sometimes we don't wanna do that so instead of making async function we can make: 
// IFEE (Immediately Invoked Function Expression) 

(async function main(){
    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);
})()
