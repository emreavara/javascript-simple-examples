// Random number comparison with promises
let p = new Promise((resolve, reject) =>{
    const RANGE = 3
    const randInt = Math.round(Math.random()*RANGE)
    const randInt2 = Math.round(Math.random()*RANGE)
    if(randInt === randInt2){
        resolve("The numbers are equal!")
    } else {
        reject("The numbers are not equal!")
    }
})

p.then((message) =>{
    console.log(`Success : ${message}`)
}).catch((message) =>{
    console.log(`Error : ${message}`)
})