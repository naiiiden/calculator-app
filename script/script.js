let num1, num2, operator;
let input = document.querySelector("#input");
const rangeSlider = document.querySelector("#range");
const deleteBtn = document.querySelector(".delete");
const resetBtn = document.querySelector(".reset");
const equalsBtn = document.querySelector(".equals");
const calcDisplay = document.querySelector(".calculator_display");
const themeLabel = document.querySelector(".input_theme_index_container .theme-label");
const rangeNumber = document.querySelectorAll(".theme_index span");
let operators = ["+", "-", "x", "/", "^", "."];

document.querySelectorAll(".number").forEach(number => {
    number.addEventListener("click", () => {
        input.textContent += number.textContent;
    });
});

document.querySelectorAll(".operator").forEach(operate => {
    operate.addEventListener("click", () => {
        if (num1 === undefined) num1 = parseFloat(input.textContent);
        
        let inputLastChar = input.textContent.slice(-1);
        if (!operators.includes(inputLastChar) && input.textContent.length > 0) {
            operator = operate.textContent;
            input.textContent += operator;
        }
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
        document.body.classList.add("theme-one");
        document.body.classList.remove("theme-two", "theme-three");
        // SET LOCALSTORAGE
        localStorage.setItem("range", range.value);

    } else if (range.value == 2) {
        document.body.classList.add("theme-two");
        document.body.classList.remove("theme-one", "theme-three");
        // SET LOCALSTORAGE
        localStorage.setItem("range", range.value);
    
    } else if (range.value == 3) {
        document.body.classList.add("theme-three");
        document.body.classList.remove("theme-one", "theme-two");
        // SET LOCALSTORAGE
        localStorage.setItem("range", range.value);
    }
});

// REAPPLY LOCAL STORAGE LOGIC???
if (localStorage.getItem("range", range.value) == 1) {
    document.body.classList.add("theme-one");
    range.value = 1;
} else if (localStorage.getItem("range", range.value) == 2) {
    document.body.classList.add("theme-two");
    range.value = 2;
} else if (localStorage.getItem("range", range.value) == 3) {
    document.body.classList.add("theme-three");
    range.value = 3;
}

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        // broken?
        case "Backspace": input.textContent = input.textContent.substring(0, input.textContent.length - 1);
        case "Enter": num2 = parseFloat(input.textContent.substring(input.textContent.indexOf(operator) + 1));
        switch (operator) {
            case "+": input.textContent = num1 + num2; num1 += num2; break;
            case "-": input.textContent = num1 - num2; num1 -= num2; break;
            case "x": input.textContent = num1 * num2; num1 *= num2; break;
            case "/": input.textContent = num1 / num2; if (num2 === 0) input.textContent = undefined; num1 /= num2; break;
            case "^": input.textContent = num1 ** num2; num1 **= num2; break;
        }; break;
        /*OPERATORS*/
        case "*": operator = "x"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent += operator; break;
        case "+": operator = "+"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent += operator; break;
        case "-": operator = "-"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent += operator; break;
        case "/": operator = "/"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent += operator; break;
        case "^": operator = "^"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent += operator; break;
        /* DECIMAL POINT */
        case ".": input.textContent += "."; break;
        /*NUMBERS*/
        case "0": input.textContent += 0; break;
        case "1": input.textContent += 1; break;
        case "2": input.textContent += 2; break;
        case "3": input.textContent += 3; break;
        case "4": input.textContent += 4; break;
        case "5": input.textContent += 5; break;
        case "6": input.textContent += 6; break;
        case "7": input.textContent += 7; break;
        case "8": input.textContent += 8; break;
        case "9": input.textContent += 9; break;
        /*EQUALS*/
        /*RESET AND DEL*/
        // EXPONENTIATION OPERATOR IS HERE SO I DON'T BREAK THE CASE ORDER
        // ?????? i'll figure out what these two cases are
        case 99: num1 = undefined; num2 = undefined; operator = undefined; input.textContent = ""; break;
        case 127: input.textContent = ""; break;
    }
});