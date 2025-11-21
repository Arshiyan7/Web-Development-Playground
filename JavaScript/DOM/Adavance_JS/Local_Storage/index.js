// Save value to local storage
function saveName() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        localStorage.setItem('userName', name);
        alert('Name saved!');
    } else {
        alert('Please enter a name.');
    }
}

// Retrieve value from local storage
function showName() {
    const storedName = localStorage.getItem('userName');
    document.getElementById('display').innerText = storedName
        ? `Stored Name: ${storedName}`
        : 'No name stored yet.';
}

// Remove specific item from local storage
function removeName() {
    localStorage.removeItem('userName');
    document.getElementById('display').innerText = 'Name removed from storage.';
}

// Clear all local storage
function clearStorage() {
    localStorage.clear();
    document.getElementById('display').innerText = 'All data cleared from storage.';
}