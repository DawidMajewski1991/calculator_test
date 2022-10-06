const defaultResult = 10;
let currentResult = defaultResult;
currentResult = (defaultResult + 10 * 2) / 4;
console.log(defaultResult);
console.log(currentResult);

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

const addResult = add(1, 8);
console.log(addResult);
console.log(add(2, 9));
add(2, 5);
let calculationDescription = `(${defaultResult} + 10 * 2)/4`;

outputResult(addResult, calculationDescription);