/*
* In this project, the ES6 JS array methods will be explained with examples.
* Functions:
* map      - iterates over an array and applies called function to each elements of the array and returns the result as an array 
* filter   - filters and returns the elements according to the condition
* forEach  - iterates over an array and does not return anything
* some     - works as if "any" and returns true or false if the given condition is satisfied only for an element
* every    - returns true if all elements of the array satisfy the condition, otherwise returns false
* reduce   - takes a parameter and initial state of it and process that parameter according to the algorithm and returns it.
* find     - returns the first element that satisfy the condition in the array
* includes - takes a parameter and looks for that item in the array. If array includes that item returns true else false
*/

const products = [
    {name : "laptop",   price: 500},
    {name : "mouse",    price: 50 },
    {name : "keyboard", price: 75 },
    {name : "monitor",  price: 300},
    {name : "headset",  price: 100},
    {name : "dock",     price: 500},
    {name : "mousepad", price: 50 },
    {name : "cable",    price: 15 },
]

// ############################################
//                    map
// ############################################
function increasePrices(items, percentage){
    return items.map( ({name, price}) =>{ // Object Destructuring **
        price = price*percentage/100 + price
        return {name, price}
    })
}
console.log(increasePrices(products,10))

// OUTPUT : 
// [{name : "laptop",   price: 550},
// {name : "mouse",    price: 55 },
// {name : "keyboard", price: 82.5 },
// {name : "monitor",  price: 330},
// {name : "headset",  price: 110},
// {name : "dock",     price: 550},
// {name : "mousepad", price: 55},
// {name : "cable",    price: 16.5}] 


// ############################################
//                   filter
// ############################################

function findCheapProducts(items, limit){
    return items.filter(item => item.price <= limit)
}

console.log(findCheapProducts(products, 100))

// OUTPUT :
// name: 'mouse', price: 50
// name: 'keyboard', price: 75
// name: 'headset', price: 100
// name: 'mousepad', price: 50
// name: 'cable', price: 15

// ############################################
//                   forEach
// ############################################

function displayEachItem(items){
    items.forEach( item => {
        console.log(`Name : ${item.name} Price : ${item.price}`)
    })
}
displayEachItem(products)

// OUTPUT : 
// name : "laptop",   price: 500
// name : "mouse",    price: 50
// name : "keyboard", price: 75 
// name : "monitor",  price: 300
// name : "headset",  price: 100
// name : "dock",     price: 500
// name : "mousepad", price: 50
// name : "cable",    price: 15

// ############################################
//                   some
// ############################################

function hasFreeProduct(items){
    return items.some( item => item.price === 0)
}
console.log(hasFreeProduct(products))

// OUTPUT : 
// false

// ############################################
//                   every
// ############################################

function shallIPayForEverything(items){
    return items.every(item => item.price > 0)
}
console.log(shallIPayForEverything(products))

// OUTPUT : 
// true

// ############################################
//                   reduce
// ############################################

function calculateTotalPrice(items){
    return items.reduce((sum, {name, price})=>{
        return price+sum
    },0)
}
console.log(calculateTotalPrice(products))

// OUTPUT : 
// 1590

// ############################################
//                   find
// ############################################

function findMouse(products){
    return products.find(product =>{
        return product.name === "mouse"
    })
}
console.log(findMouse(products))

// OUTPUT :
// {name: 'mouse', price: 50}

// ############################################
//                   includes
// ############################################

const productsArray = ["mouse", "laptop", "headset", "monitor", "keyboard"]

console.log(productsArray.includes("keyboard"))
console.log(productsArray.includes("apple"))

// OUTPUT : 
// true
// false

