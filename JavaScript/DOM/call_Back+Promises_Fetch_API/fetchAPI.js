console.log('Code Running, OK');

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu") // fetch is promise based (it should resolve/reject)
// .then(response => response.json()) // convert the raw data into json (after fetching the data check if OK is true false, true means fetched)
// .then(data => console.log(data)) // get the json converted data and show it (try writing .name, .id., .weight with data)
// .catch(error => console.log(error))

// using async and await 

fetchData()
async function fetchData(){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion")
        
        if (!response.ok) {
            throw new Error("Could not fetch the resource")
        }

        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.error(error);
        
    }
}