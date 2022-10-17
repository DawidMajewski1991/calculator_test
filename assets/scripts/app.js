// Get user entered number
function getUserNumberInput() {
    console.log(`Entered ${parseFloat(userInput.value)}.`);
    return parseFloat(userInput.value);
}

// Creates calculation description and making result output
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

// Add user input number to last result
function add() {
    const enteredNumber = getUserNumberInput();
    initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput("+", initialResult, enteredNumber);
    const logEntry = {
        operation: "ADD",
        num1: initialResult,
        num2: enteredNumber,
        result: currentResult,
    };
    console.log(logEntry);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

// Add 1 to last result
function add1() {
    const enteredNumber = 1;
    initialResult = currentResult;
    currentResult ++;
    createAndWriteOutput("+", initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

// Subtract user input number from last result
function subtract() {
    const enteredNumber = getUserNumberInput();
    initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput("-", initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

// Subtract 1 from last result
function subtract1() {
    const enteredNumber = 1;
    initialResult = currentResult;
    currentResult --;
    createAndWriteOutput("-", initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}
// Multiply user input number by last result
function multiply() {
    const enteredNumber = getUserNumberInput();
    initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput("*", initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

// Divide user input number by last result
function divide() {
    const enteredNumber = getUserNumberInput();
    initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput("/", initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
add1Btn.addEventListener("click", add1);
subtract1Btn.addEventListener("click", subtract1);
