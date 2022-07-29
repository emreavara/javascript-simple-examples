// Simple Calculation example without any error handling just to explain callbacks
const sum = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const mul = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2

const calculate = (operation, num1, num2) =>{
    return operation(num1, num2)
}

const num1 = 10
const num2 = 2

console.log(calculate(mul, num1, num2 ))
