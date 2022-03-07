let num1, num2, operator;
let input = document.querySelector("#input");
input.addEventListener("keypress", e => {
        if (!/[0-9\./]+/.test(e.key)) { //PREVENTS FROM TYPING CHARACTERS WHICH ARE DIFFERENT THAN 0-9 AND .
        e.preventDefault();
    };
});

document.querySelectorAll(".number").forEach(number => {
    number.addEventListener("click", () => {
        input.value += number.textContent;
    });
});

document.querySelectorAll(".operator").forEach(operate => {
    operate.addEventListener("click", () => {
        if (num1 === undefined) num1 = parseFloat(input.value);
        operator = operate.textContent;
        input.value = "";
    });
});

document.querySelector("#equals").addEventListener("click", () => {
    num2 = parseFloat(input.value);
    switch (operator) {
        case "+": input.value = num1 + num2; break;
        case "-": input.value = num1 - num2; break;
        case "x": input.value = num1 * num2; break;
        case "/": input.value = num1 / num2; if (num2 === 0) input.value = undefined; break;
    }
});

document.querySelector("#reset").addEventListener("click", () => {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    input.value = "";
});

document.querySelector("#delete").addEventListener("click", () => {
    input.value = "";
});