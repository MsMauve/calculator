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

const updateDisplay = (num) => {
    if (display.textContent === '0') {
        display.textContent = num;
    } else if (display.textContent.length < 12) {
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


