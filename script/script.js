let num1, num2, operator;
let input = document.querySelector("#input");
let equals = document.querySelector("#equals");
let numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");
let reset = document.querySelector("#reset");

numbers.forEach(number => {
    number.addEventListener("click", () => {
        input.value += number.textContent;
    });
});

operators.forEach(operate => {
    operate.addEventListener("click", () => {
        num1 = parseFloat(input.value);
        operator = operate.textContent;
        input.value = "";
    });
});

equals.addEventListener("click", () => {
    num2 = parseFloat(input.value);
    switch (operator) {
        case "+": input.value = num1 + num2; break;
        case "-": input.value = num1 - num2; break;
        case "*": input.value = num1 * num2; break;
        case "/": input.value = num1 / num2; break;
    }
});

reset.addEventListener("click", () => {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    input.value = "";
});