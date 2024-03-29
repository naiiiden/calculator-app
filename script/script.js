let num1, num2, operator;
const input = document.querySelector("#input");
const rangeSlider = document.querySelector("#range");
const deleteBtn = document.querySelector(".delete");
const resetBtn = document.querySelector(".reset");
const equalsBtn = document.querySelector(".equals");
const calcDisplay = document.querySelector(".calculator_display");
const themeLabel = document.querySelector(".input_theme_index_container .theme-label");
const rangeNumber = document.querySelectorAll(".theme_index span");
const operators = ["+", "-", "x", "/", "^"];

document.querySelectorAll(".number").forEach(number => {
    number.addEventListener("click", () => {
        input.textContent += number.textContent;
    });
});

document.querySelector("#float").addEventListener("click", () => {
    if (input.textContent.slice(-1) !== ".") {
        input.textContent += ".";
    }
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
        case "/": input.textContent = num1 / num2; if (num2 === 0) input.textContent = "Infinity"; num1 /= num2; break;
        case "^": input.textContent = num1 ** num2; num1 **= num2; break;
    }

    num2 = undefined;
    operator = undefined;
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

/* COLOR SCHEME SLIDER  + LOCAL STORAGE*/
range.addEventListener("input", () => {
    if (range.value == 1) {
        document.body.classList.add("theme-one");
        document.body.classList.remove("theme-two", "theme-three");
        localStorage.setItem("range", range.value);
    } else if (range.value == 2) {
        document.body.classList.add("theme-two");
        document.body.classList.remove("theme-one", "theme-three");
        localStorage.setItem("range", range.value);
    
    } else if (range.value == 3) {
        document.body.classList.add("theme-three");
        document.body.classList.remove("theme-one", "theme-two");
        localStorage.setItem("range", range.value);
    }
});

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
        case "Backspace": input.textContent = input.textContent.substring(0, input.textContent.length - 1); break;
        case "Enter": 
            if (operator !== undefined) {
                num2 = parseFloat(input.textContent.substring(input.textContent.indexOf(operator) + 1));
                switch (operator) {
                    case "+": input.textContent = num1 + num2; num1 += num2; break;
                    case "-": input.textContent = num1 - num2; num1 -= num2; break;
                    case "x": input.textContent = num1 * num2; num1 *= num2; break;
                    case "/": input.textContent = num1 / num2; if (num2 === 0) input.textContent = "Infinity"; num1 /= num2; break;
                    case "^": input.textContent = num1 ** num2; num1 **= num2; break;
                }
                num2 = undefined;
                operator = undefined;
            }
        break;
        /*OPERATORS*/
        case "*":
        case "+":
        case "-":
        case "/":
        case "^":
            // prevents adding another operator if the last character is also an operator
            if (input.textContent.length > 0 && "+-x/^".includes(input.textContent.slice(-1))) {
                break;
            }
            operator = e.key === "*" ? "x" : e.key;
            num1 = parseFloat(input.textContent);
            input.textContent += operator;
            break;
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
        /* RESEt */
        case "Delete":
        case "C":
        case "c": num1 = undefined; num2 = undefined; operator = undefined; input.textContent = ""; break;
    }
});