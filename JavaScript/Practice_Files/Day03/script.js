console.log('Code Running, OK!!');
console.log('---------------------------------------------------------------Arrays Practice--------------------------------------------------');

console.log('\nQuestion no 1');
let favoriteColors = ["Blue", "Green", "Red"]
favoriteColors.push("Yellow")
console.log(favoriteColors);

console.log('\nQuestion no 2');
let scores = [85, 92, 78, 95]
let thirdScore = scores[2]
scores[0] = 90
console.log(`Scores: ${scores}\nThird Score: ${thirdScore}`);

console.log('\nQuestion no 3');
let inventory = ["Laptop", "Keyboard", "Mouse", "Monitor"]
console.log(`Last element (${inventory.pop()}) poped From Array\nnew Array: ${inventory} `);
console.log(`First element (${inventory.shift()}) removed from array\nnew Array: ${inventory} `);
console.log('Final Array', inventory);

console.log('\nQuestion no 4');
let ToDoList = []
console.log('Array Length Before adding Element: ', ToDoList.length);
ToDoList.push("Buy groceries")
let listCount = ToDoList.length
console.log('Array Length After adding Element: ', listCount);

console.log('\nQuestion no 5');
let ProfileData = ["Charlie", 25, true]
console.log('Array Length Before adding Element: ', ProfileData.length);
ProfileData.unshift(180)
console.log('Array Length After adding Element: ', ProfileData.length);

console.log('---------------------------------------------------------------Objects Practice--------------------------------------------------');

console.log('\nQuestion no 1');
let books = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
}
let BookAuthor = books.author
console.log("Book Author:", BookAuthor);

console.log('\nQuestion no 2');
let product = {
    Price: 150,
    inStock: true
}
console.log('Object before Changes:', product);
product.Price = 135
console.log('Object After Changes:', product);

console.log('\nQuestion no 3');
let city = {
    population_size: 8500000,
}
let KeytoAccess = 'population_size'
let cityPoP = city[KeytoAccess]
console.log(cityPoP);

console.log('\nQuestion no 4');
let company = {
    name: 'TechCorp',
    address: {
        street: "123 Main St",
        zipCode: 90210
    }
}
console.log("Company ZipCode:", company.address.zipCode);

console.log('\nQuestion no 5');
let settings = {
    theme: "Dark",
    font_size: 12,
    notifications: true
}
console.log('Before deleting notifications, The settings:', settings);
delete settings.notifications
console.log('After deleting notifications, The settings:', settings);

console.log('\nCombining Array and objects');
const object_one = {
        id: 101,
        name: "Headphones",
        price: 50
    }
const object_two = {
        id: 102,
        name: "WebCam",
        price: 75
    }
const ProductCatalog = [object_one,object_two]
// Object to add using array method (written down below)
const object_three = {
    id: 103,
    name: "Microphone",
    price: 120
}
console.log('Array before addition of new object and Price change of 2nd object',ProductCatalog);
ProductCatalog.push(object_three)
ProductCatalog[1].price = 80
console.log('Array After addition of new object and Price change of 2nd object',ProductCatalog);

console.log('---------------------------------------------------------------Map, filter & Find--------------------------------------------------');

console.log('Question on 1');
const employees = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Manager" }
];

const names = employees.map(employees => employees.name)
console.log(names);

console.log('\nQuestion no 2');
const products = [
  { id: 'a1', category: "Electronics", price: 150 },
  { id: 'b2', category: "Books", price: 25 },
  { id: 'c3', category: "Electronics", price: 500 },
  { id: 'd4', category: "Books", price: 10 }
];
const electronic = products.filter(prodcuts => prodcuts.category == 'Electronics')
console.log(electronic);

console.log('\nQuestion no 3');
const products_two = [
  { id: 'a1', category: "Electronics", price: 150 },
  { id: 'b2', category: "Books", price: 25 },
  { id: 'c3', category: "Electronics", price: 500 },
  { id: 'd4', category: "Books", price: 10 }
];
const c3 = products_two.find(products_two => products_two.id == 'c3')
console.log(c3);