let num1, num2, operator;
let input = document.querySelector("#input");

const rangeSlider = document.querySelector("#range");
const deleteBtn = document.querySelector(".delete");
const resetBtn = document.querySelector(".reset");
const equalsBtn = document.querySelector(".equals");
const calcDisplay = document.querySelector(".calculator_display");
const themeLabel = document.querySelector(".input_theme_index_container .theme-label");
const rangeNumber = document.querySelectorAll(".theme_index span");

document.querySelectorAll(".number").forEach(number => {
    number.addEventListener("click", () => {
        input.textContent += number.textContent;
    });
});

document.querySelectorAll(".operator").forEach(operate => {
    operate.addEventListener("click", () => {
        if (num1 === undefined) num1 = parseFloat(input.textContent);
        operator = operate.textContent;
        input.textContent += operator;
    });
});

equalsBtn.addEventListener("click", () => {
    num2 = parseFloat(input.textContent.substring(input.textContent.indexOf(operator) + 1));
    
    switch (operator) {
        case "+": input.textContent = num1 + num2; num1 += num2; break;
        case "-": input.textContent = num1 - num2; num1 -= num2; break;
        case "x": input.textContent = num1 * num2; num1 *= num2; break;
        case "/": input.textContent = num1 / num2; if (num2 === 0) input.textContent = undefined; num1 /= num2; break;
        case "^": input.textContent = num1 ** num2; num1 **= num2; break;
    }
});

resetBtn.addEventListener("click", () => {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    input.textContent = "";
});

deleteBtn.addEventListener("click", () => {
    input.textContent = input.textContent.substring(0, input.textContent.length - 1);
});

/* COLOR SCHEME SLIDER */
range.addEventListener("input", () => {
    if (range.value == 1) {

        // SET LOCALSTORAGE
        localStorage.setItem("range", range.value);

    } else if (range.value == 2) {

        // SET LOCALSTORAGE
        localStorage.setItem("range", range.value);
    
    } else if (range.value == 3) {

        // SET LOCALSTORAGE
        localStorage.setItem("range", range.value);
    }
});

// REAPPLY LOCAL STORAGE LOGIC???
if (localStorage.getItem("range", range.value) == 1) {
    range.value = 1;
} else if (localStorage.getItem("range", range.value) == 2) {
    range.value = 2;

} else if (localStorage.getItem("range", range.value) == 3) {
    range.value = 3;
}

document.addEventListener("keypress", (e) => {
    switch (e.keyCode) {
        case 13: num2 = parseFloat(input.textContent.substring(input.textContent.indexOf(operator) + 1));
        switch (operator) {
            case "+": input.textContent = num1 + num2; num1 += num2; break;
            case "-": input.textContent = num1 - num2; num1 -= num2; break;
            case "x": input.textContent = num1 * num2; num1 *= num2; break;
            case "/": input.textContent = num1 / num2; if (num2 === 0) input.textContent = undefined; num1 /= num2; break;
            case "^": input.textContent = num1 ** num2; num1 **= num2; break;
        }; break;
        /*OPERATORS*/
        case 42: operator = "x"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent += operator; break;
        case 43: operator = "+"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent += operator; break;
        case 45: operator = "-"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent += operator; break;
        case 47: operator = "/"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent += operator; break;
        /*NUMBERS*/
        case 48: input.textContent += 0; break;
        case 49: input.textContent += 1; break;
        case 50: input.textContent += 2; break;
        case 51: input.textContent += 3; break;
        case 52: input.textContent += 4; break;
        case 53: input.textContent += 5; break;
        case 54: input.textContent += 6; break;
        case 55: input.textContent += 7; break;
        case 56: input.textContent += 8; break;
        case 57: input.textContent += 9; break;
        /*EQUALS*/
        /*RESET AND DEL*/
        // EXPONENTIATION OPERATOR IS HERE SO I DON'T BREAK THE CASE ORDER
        case 94: operator = "^"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent += operator; break;
        case 99: num1 = undefined; num2 = undefined; operator = undefined; input.textContent = ""; break;
        case 127: input.textContent = ""; break;
    }
});