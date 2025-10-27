console.log("Code Running, OK!!")

// Add a click event listener to the '.child' element
document.querySelector('.child').addEventListener('click', (e) => {
    e.stopPropagation(); // Stops the event from bubbling up to parent elements
    alert("Child was clicked");
});

// Add a click event listener to the '.childContainer' element
document.querySelector('.childContainer').addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents bubbling to '.container'
    alert("childContainer was clicked");
});

// Add a click event listener to the '.container' element
document.querySelector('.container').addEventListener('click', () => {
    alert("container was clicked");
});

// Function to generate a random RGB color
function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Change background color of '.childContainer' every second
let colorInterval = setInterval(() => {
    document.querySelector('.childContainer').style.background = getRandomColor();
}, 1000);

// Stop changing color after 10 seconds (clearInterval example)
setTimeout(() => {
    clearInterval(colorInterval);
    console.log("Color change stopped after 10 seconds");
}, 10000);

// Example of setTimeout: change background color once after 5 seconds
let colorTimeout = setTimeout(() => {
    document.querySelector('.childContainer').style.background = getRandomColor();
    console.log("Background color changed once after 5 seconds");
}, 5000);

// Example of clearing a timeout (cancel it before it executes)
// Uncomment below line to prevent the single delayed color change
// clearTimeout(colorTimeout);