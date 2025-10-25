let cont = document.body.firstElementChild;  
// Selects the first child element inside the <body> (in this case, a <div> with class="container")
// and stores it in a variable named 'cont'.

undefined  
// This just means the console didn't return a value — normal behavior when assigning a variable.

cont  
// Displays the element stored in 'cont' — should show: <div class="container">…</div>

cont.children[2].style.backgroundColor = 'red';  
// Changes the background color of the 3rd child element (index 2) inside the container to red.

'red'  
// This is the return value of the style assignment — confirming the background color is now red.

cont.children  
// Displays a live HTMLCollection (like an array) of all child elements inside the container.
// For example: [div.box, div.box, div.box, div.box, div.box]

cont.children[2].style.color = 'white';  
// Changes the text color of the same 3rd child element to white.

'white'  
// Again, this is just the return value of the assignment.

cont.children[2].nextElementSibling;  
// Selects and shows the next sibling (the element right after the 3rd one).
// In this case: <div class="box">Box4</div>

cont.children[2].previousElementSibling;  
// Selects and shows the previous sibling (the element right before the 3rd one).
// In this case: <div class="box">Box2</div>
