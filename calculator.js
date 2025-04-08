const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

let numA;
let numB;
let operator;

const display = document.querySelector("#display");
const allDigitBtn = document.querySelectorAll(".num-btn");
const clearBtn = document.querySelector("#ac-btn");
const displayNum = display.textContent;
const equalsBtn = document.querySelector("#equals-btn");
const absBtn = document.querySelector("#abs-btn");
const percentBtn = document.querySelector("#percent-btn");
const divideBtn = document.querySelector("#division-btn");
const multiplyBtn = document.querySelector("#multiply-btn")
const subtractBtn = document.querySelector("#subtract-btn");
const addBtn = document.querySelector("#add-btn");
const decimalBtn = document.querySelector("#decimal-btn");

const updateDisplay = (num) => {
    if (displayNum === '0') {
        displayNum = num;
    } else if (displayNum.length < 6) {
        displayNum += num;
    }
    else {
        alert("Sorry, it's a mini calculator!");
    }
};

const clearDisplay = () => {
    displayNum = 0;
}

allDigitBtn.forEach((btn) => {
    btn.addEventListener('click', function() {
        updateDisplay(btn.textContent)
    });
})

clearBtn.addEventListener('click', function() {
    clearDisplay();
});

divideBtn.addEventListener('click', function() {
    numA = displayNum;
    operator = "divide";
    clearDisplay();
});

multiplyBtn.addEventListener('click', function() {
    numA = displayNum;
    operator = "multiply";
    clearDisplay();
});

subtractBtn.addEventListener('click', function() {
    numA = displayNum;
    operator = "subtract";
    clearDisplay();
});

addBtn.addEventListener('click', function() {
    numA = displayNum;
    operator = "add";
    clearDisplay();
});

equalsBtn.addEventListener('click',() => {
    if (Number(displayNum) && numA) {
        numB = displayNum;
        switch (operator) {
            case "divide":
                displayNum = divide(numA, numB);
                numA = null;
                numB = null;
                break;
            case "multiply":
                displayNum = multiply(numA, numB);
                numA = null;
                numB = null;
                break;
            case "subtract":
                displayNum = subtract(numA, numB);
                numA = null;
                numB = null;
                break;
            case "add":
                displayNum = add(numA, numB);
                numA = null;
                numB = null;
                break;
        }
    }
});
