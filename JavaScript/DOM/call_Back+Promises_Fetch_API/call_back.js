// What is asynchronus programming in JS: 
// for example: 
console.log("print statement 1")
console.log("print statement 2")

setTimeout(() => {
    console.log("I will Run after 0s")
}, 0);

setTimeout(() => {
    console.log("I will Run after 0s")
}, 0);

console.log("THE END! ")
// now you will expect that 1-2 print will run then the setTimeout print statements then THE END, but it's not 
// 1-2 print statements will run then THE END and then setTimeout ones, because JS will run print statements normally it doesn't care about 
// the seTimeout it'll just run it at the end 

//CALLBACK 

const loadScript = (callback) => {
    setTimeout(() => {
        console.log("Data is ready!")
        callback()
    }, 2000);
}

const data_process = () => {
    console.log("processing data...")
}

loadScript(data_process)


