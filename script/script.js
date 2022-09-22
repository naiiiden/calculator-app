let num1, num2, operator;
let input = document.querySelector("#input");

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
        if (operator === "√") {
            input.textContent = Math.sqrt(num1);
            // num1 = 
        }
    });
});

document.querySelector("#equals").addEventListener("click", () => {
    // num2 = parseFloat(input.textContent); 
    num2 = parseFloat(input.textContent.substring(input.textContent.indexOf(operator) + 1));
    
    switch (operator) {
        case "+": input.textContent = num1 + num2; num1 += num2; break;
        case "-": input.textContent = num1 - num2; num1 -= num2; break;
        case "x": input.textContent = num1 * num2; num1 *= num2; break;
        case "/": input.textContent = num1 / num2; if (num2 === 0) input.textContent = undefined; num1 /= num2; break;
        case "**": input.textContent = num1 ** num2; num1 **= num2; break;
        // case "√": input.textContent = Math.sqrt(num1); num1 = Math.sqrt(num1); break;
        // case "√": num1 = input.textContent;
    }
});

document.querySelector("#reset").addEventListener("click", () => {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    input.textContent = "";
});

document.querySelector("#delete").addEventListener("click", () => {
    input.textContent = "";
});

/* COLOR SCHEME SLIDER */
document.querySelector("#range").addEventListener("input", () => {
    if (range.value == 1) {
        document.body.style.backgroundColor = "hsl(222, 26%, 31%)"; // main bg
        document.querySelector(".calculator_display").style.backgroundColor = "hsl(223, 31%, 20%)"; // calculator display
        document.querySelector(".calculator_display").style.color = "#fff"; // calculator display color
        document.querySelector(".input_theme_index_container .theme-label").style.color = "#fff"; // theme text color
        document.querySelectorAll(".theme_index span").forEach(number => {
            number.style.color = "#fff"; // numbers above the slider
        });
        document.querySelector("h1").style.color = "#fff"; // calc
        document.querySelector(".keys_container").style.backgroundColor = "hsl(223, 31%, 20%)"; // keyboard bg
        document.querySelectorAll(".key").forEach(key => {
            key.style.backgroundColor = "hsl(30, 25%, 89%)"; // key bg
            key.style.color = "hsl(221, 14%, 31%)"; // key color 
            key.style.borderBottom = ".25rem solid hsl(28, 16%, 65%)"; // key bottom border 
        });
        document.querySelector(".delete").style.backgroundColor = "hsl(225, 21%, 49%)";
        document.querySelector(".delete").style.borderBottom = ".25rem solid hsl(224, 28%, 35%)";
        document.querySelector(".delete").style.color = "#fff";
        document.querySelector(".reset").style.backgroundColor = "hsl(185, 42%, 37%)";
        document.querySelector(".reset").style.borderBottom = ".25rem solid hsl(185, 58%, 25%)";
        document.querySelector(".equals").style.backgroundColor = "hsl(6, 63%, 50%)";
        document.querySelector(".equals").style.borderBottom = ".25rem solid hsl(6, 70%, 34%)";
        document.querySelector(".equals").style.color = "#fff";
        document.querySelector("#range").classList.remove("range2");
        document.querySelector("#range").classList.remove("range3");
        document.querySelector("#range").classList.add("range");
        // SET LOCALSTORAGE
        localStorage.setItem("range", range.value);

    } else if (range.value == 2) {
        document.body.style.backgroundColor = "rgb(230, 230, 230)"; // main bg
        document.querySelector(".calculator_display").style.backgroundColor = "hsl(0, 0%, 93%)"; // calculator display
        document.querySelector(".calculator_display").style.color = "hsl(60, 10%, 19%)"; // calculator display color
        document.querySelector(".input_theme_index_container .theme-label").style.color = "hsl(60, 10%, 19%)"; // theme text color
        document.querySelectorAll(".theme_index span").forEach(number => {
            number.style.color = "hsl(60, 10%, 19%)"; // numbers above the slider
        });
        document.querySelector("h1").style.color = "hsl(60, 10%, 19%)"; // calc
        document.querySelector(".keys_container").style.backgroundColor = "hsl(0, 5%, 81%)"; // keyboard bg
        document.querySelectorAll(".key").forEach(key => {
            key.style.backgroundColor = "hsl(45, 7%, 89%)"; // key bg
            key.style.color = "hsl(60, 10%, 19%)"; // key color
            key.style.borderBottom = ".25rem solid hsl(35, 11%, 61%)";
        });
        document.querySelector(".delete").style.backgroundColor = "hsl(185, 42%, 37%)";
        document.querySelector(".delete").style.color = "#fff";
        document.querySelector(".delete").style.borderBottom = ".25rem solid hsl(185, 58%, 25%)";
        document.querySelector(".reset").style.backgroundColor = "hsl(185, 42%, 37%)";
        document.querySelector(".reset").style.borderBottom = ".25rem solid hsl(185, 58%, 25%)";
        document.querySelector(".equals").style.backgroundColor = "hsl(25, 98%, 40%)";
        document.querySelector(".equals").style.borderBottom = ".25rem solid hsl(25, 99%, 27%)";
        document.querySelector(".equals").style.color = "#fff";
        document.querySelector("#range").classList.remove("range");
        document.querySelector("#range").classList.remove("range3");
        document.querySelector("#range").classList.add("range2");
        // SET LOCALSTORAGE
        localStorage.setItem("range", range.value);
    
    } else if (range.value == 3) {
        document.body.style.backgroundColor = "hsl(268, 75%, 9%)"; // main bg
        document.querySelector(".calculator_display").style.backgroundColor = "hsl(268, 71%, 12%)"; // calculator  display
        document.querySelector(".calculator_display").style.color = "hsl(52, 100%, 62%)"; // calculator display color
        document.querySelector(".input_theme_index_container .theme-label").style.color = "hsl(52, 100%, 62%)"; // theme text color
        document.querySelectorAll(".theme_index span").forEach(number => {
            number.style.color = "hsl(52, 100%, 62%)"; // numbers above the slider
        });
        document.querySelector("h1").style.color = "hsl(52, 100%, 62%)"; // calc
        document.querySelector(".keys_container").style.backgroundColor = "hsl(268, 71%, 12%)"; // keyboard bg
        document.querySelectorAll(".key").forEach(key => {
            key.style.backgroundColor = "hsl(268, 47%, 21%)"; // key bg
            key.style.color = "hsl(52, 100%, 62%)"; // key color
            key.style.borderBottom = ".25rem solid hsl(290, 70%, 36%)";
        });
        document.querySelector(".delete").style.backgroundColor = "hsl(281, 89%, 26%)";
        document.querySelector(".delete").style.borderBottom = ".25rem solid hsl(285, 91%, 52%)";
        document.querySelector(".delete").style.color = "#fff";
        document.querySelector(".reset").style.backgroundColor = "hsl(281, 89%, 26%)";
        document.querySelector(".reset").style.borderBottom = ".25rem solid hsl(285, 91%, 52%)";
        document.querySelector(".reset").style.color = "#fff";
        document.querySelector(".equals").style.backgroundColor = "hsl(176, 100%, 44%)";
        document.querySelector(".equals").style.borderBottom = ".25rem solid hsl(177, 92%, 70%)";
        document.querySelector(".equals").style.color = "hsl(198, 20%, 13%)";
        document.querySelector("#range").classList.remove("range");
        document.querySelector("#range").classList.remove("range2");
        document.querySelector("#range").classList.add("range3");
        // SET LOCALSTORAGE
        localStorage.setItem("range", range.value);
    }
});

// LOCAL STORAGE, I HAD TO APPLY ALL STYLES AGAIN IN ORDER TO START WORKING AGAIN
if (localStorage.getItem("range", range.value) == 1) {
    range.value = 1;
} else if (localStorage.getItem("range", range.value) == 2) {
    range.value = 2;
    document.body.style.backgroundColor = "rgb(230, 230, 230)"; // main bg
    document.querySelector(".calculator_display").style.backgroundColor = "hsl(0, 0%, 93%)"; // calculator display
    document.querySelector(".calculator_display").style.color = "hsl(60, 10%, 19%)"; // calculator display color
    document.querySelector(".input_theme_index_container .theme-label").style.color = "hsl(60, 10%, 19%)"; // theme text color
    document.querySelectorAll(".theme_index span").forEach(number => {
        number.style.color = "hsl(60, 10%, 19%)"; // numbers above the slider
    });
    document.querySelector("h1").style.color = "hsl(60, 10%, 19%)"; // calc
    document.querySelector(".keys_container").style.backgroundColor = "hsl(0, 5%, 81%)"; // keyboard bg
    document.querySelectorAll(".key").forEach(key => {
        key.style.backgroundColor = "hsl(45, 7%, 89%)"; // key bg
        key.style.color = "hsl(60, 10%, 19%)"; // key color
        key.style.borderBottom = ".25rem solid hsl(35, 11%, 61%)";
    });
    document.querySelector(".delete").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.querySelector(".delete").style.color = "#fff";
    document.querySelector(".delete").style.borderBottom = ".25rem solid hsl(185, 58%, 25%)";
    document.querySelector(".reset").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.querySelector(".reset").style.borderBottom = ".25rem solid hsl(185, 58%, 25%)";
    document.querySelector(".equals").style.backgroundColor = "hsl(25, 98%, 40%)";
    document.querySelector(".equals").style.borderBottom = ".25rem solid hsl(25, 99%, 27%)";
    document.querySelector(".equals").style.color = "#fff";
    document.querySelector("#range").classList.remove("range");
    document.querySelector("#range").classList.remove("range3");
    document.querySelector("#range").classList.add("range2");
} else if (localStorage.getItem("range", range.value) == 3) {
    range.value = 3;
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)"; // main bg
    document.querySelector(".calculator_display").style.backgroundColor = "hsl(268, 71%, 12%)"; // calculator  display
    document.querySelector(".calculator_display").style.color = "hsl(52, 100%, 62%)"; // calculator display color
    document.querySelector(".input_theme_index_container .theme-label").style.color = "hsl(52, 100%, 62%)"; // theme text color
    document.querySelectorAll(".theme_index span").forEach(number => {
        number.style.color = "hsl(52, 100%, 62%)"; // numbers above the slider
    });
    document.querySelector("h1").style.color = "hsl(52, 100%, 62%)"; // calc
    document.querySelector(".keys_container").style.backgroundColor = "hsl(268, 71%, 12%)"; // keyboard bg
    document.querySelectorAll(".key").forEach(key => {
        key.style.backgroundColor = "hsl(268, 47%, 21%)"; // key bg
        key.style.color = "hsl(52, 100%, 62%)"; // key color
        key.style.borderBottom = ".25rem solid hsl(290, 70%, 36%)";
    });
    document.querySelector(".delete").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.querySelector(".delete").style.borderBottom = ".25rem solid hsl(285, 91%, 52%)";
    document.querySelector(".delete").style.color = "#fff";
    document.querySelector(".reset").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.querySelector(".reset").style.borderBottom = ".25rem solid hsl(285, 91%, 52%)";
    document.querySelector(".reset").style.color = "#fff";
    document.querySelector(".equals").style.backgroundColor = "hsl(176, 100%, 44%)";
    document.querySelector(".equals").style.borderBottom = ".25rem solid hsl(177, 92%, 70%)";
    document.querySelector(".equals").style.color = "hsl(198, 20%, 13%)";
    document.querySelector("#range").classList.remove("range");
    document.querySelector("#range").classList.remove("range2");
    document.querySelector("#range").classList.add("range3");
}

document.addEventListener("keypress", (e) => {
    switch (e.keyCode) {
        case 13: num2 = parseFloat(input.textContent);
        switch (operator) {
            case "+": input.textContent = num1 + num2; num1 += num2; break;
            case "-": input.textContent = num1 - num2; num1 -= num2; break;
            case "x": input.textContent = num1 * num2; num1 *= num2; break;
            case "/": input.textContent = num1 / num2; if (num2 === 0) input.textContent = undefined; num1 /= num2; break;
            case "**": input.textContent = num1 ** num2; num1 **= num2; break;
        }; break;
        /*OPERATORS*/
        case 42: operator = "x"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent = ""; break;
        case 43: operator = "+"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent = ""; break;
        case 45: operator = "-"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent = ""; break;
        case 47: operator = "/"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent = ""; break;
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
        case 94: operator = "**"; if (num1 === undefined) num1 = parseFloat(input.textContent); input.textContent = ""; break;
        case 99: num1 = undefined; num2 = undefined; operator = undefined; input.textContent = ""; break;
        case 127: input.textContent = ""; break;
    }
});