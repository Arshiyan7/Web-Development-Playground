console.log("Code Running, OK!!");

let all_elements = document.querySelectorAll('.boxes');
let button = document.getElementById('changeColors');

// Function to generate random RGB color
function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Function to apply random colors to all boxes
function applyRandomColors() {
    all_elements.forEach(e => {
        let randomColor = getRandomColor();
        e.style.backgroundColor = randomColor;
        e.style.color = "#fff"; // white text for contrast
        e.textContent = randomColor; // show color code inside box
    });
}

// Run once on page load
applyRandomColors();

// Re-run when button is clicked
button.addEventListener('click', applyRandomColors);
