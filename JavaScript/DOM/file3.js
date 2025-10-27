// Log message to confirm the code is running
console.log("Code Running, Ok!!");

// Select the first element in the document with class 'box'
let item = document.body.querySelector('.box');

// Show the inner HTML content of the element
console.log(item.innerHTML);

// Show the complete HTML (including the element itself)
console.log(item.outerHTML);

// Show the tag name of the element (e.g., DIV)
console.log(item.tagName);

// Show the node name (same as tagName for elements)
console.log(item.nodeName);

// Show only the text inside the element
console.log(item.textContent);

// Hide the element by setting the hidden property to true
item.hidden = true;

// Unhide the element by setting the hidden property to false
item.hidden = false;

// Change the text/HTML content inside the element
item.innerHTML = "Hey, this is a box modified using innerHTML";

// Check if the element has a 'style' attribute
console.log(item.hasAttribute('style'));

// Add inline CSS to display the box as flex
item.style.display = 'flex';

// Check again if 'style' attribute exists (should now be true)
console.log(item.hasAttribute('style'));

// Update the style attribute to display inline
item.setAttribute('style', 'display: inline');

// Retrieve and log the current value of the 'style' attribute
console.log(item.getAttribute('style'));

// Insert bold text *after* the box element in the HTML
item.insertAdjacentHTML("afterend", "<b>This tag is added after the container DIV using JavaScript</b>");

// Insert bold text *before* the box element in the HTML
item.insertAdjacentHTML("beforebegin", "<b>This tag is added before the container DIV using JavaScript</b>");
