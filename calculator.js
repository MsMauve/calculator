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
const equalsBtn = document.querySelector("#equals-btn");
const absBtn = document.querySelector("#abs-btn");
const percentBtn = document.querySelector("#percent-btn");
const divideBtn = document.querySelector("#division-btn");
const multiplyBtn = document.querySelector("#multiply-btn")
const subtractBtn = document.querySelector("#subtract-btn");
const addBtn = document.querySelector("#add-btn");
const decimalBtn = document.querySelector("#decimal-btn");

const updateDisplay = (num) => {
    if (display.textContent === '0') {
        display.textContent = num;
    } else if (display.textContent.length < 6) {
        display.textContent += num;
    }
    else {
        alert("Sorry, it's a mini calculator!");
    }
};

const clearDisplay = () => {
    display.textContent = 0;
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
    numA = display.textContent;
    operator = "divide";
    clearDisplay();
});

multiplyBtn.addEventListener('click', function() {
    numA = display.textContent;
    operator = "multiply";
    clearDisplay();
});

subtractBtn.addEventListener('click', function() {
    numA = display.textContent;
    operator = "subtract";
    clearDisplay();
});

addBtn.addEventListener('click', function() {
    numA = display.textContent;
    operator = "add";
    clearDisplay();
});

equalsBtn.addEventListener('click',() => {
    if (Number(display.textContent) && numA) {
        numB = display.textContent;
        switch (operator) {
            case "divide":
                if (display.textContent === '0') {
                    display.textContent === 'Nice try, clown.'
                    break;
                } else {
                    display.textContent = divide(numA, numB);
                    numA = null;
                    numB = null;
                    break;
                }
            case "multiply":
                display.textContent = multiply(numA, numB);
                numA = null;
                numB = null;
                break;
            case "subtract":
                display.textContent = subtract(numA, numB);
                numA = null;
                numB = null;
                break;
            case "add":
                display.textContent = add(numA, numB);
                numA = null;
                numB = null;
                break;
        }
    }
});
