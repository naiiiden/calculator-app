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
    // num1 += num2;
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

/* COLOR SCHEME SLIDER */
document.querySelector("#range").addEventListener("input", () => {
    if (range.value == 1) {
        document.body.style.backgroundColor = "hsl(222, 26%, 31%)"; // main bg
        document.querySelector(".calculator_display").style.backgroundColor = "hsl(223, 31%, 20%)"; // calculator display
        document.querySelector(".calculator_display").style.color = "#fff"; // calculator display color
        document.querySelector(".input_theme_index_container span").style.color = "#fff"; // theme text color
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
        document.querySelector(".input_theme_index_container span").style.color = "hsl(60, 10%, 19%)"; // theme text color
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
        document.querySelector(".input_theme_index_container span").style.color = "hsl(52, 100%, 62%)"; // theme text color
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
    document.querySelector(".input_theme_index_container span").style.color = "hsl(60, 10%, 19%)"; // theme text color
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
    document.querySelector(".input_theme_index_container span").style.color = "hsl(52, 100%, 62%)"; // theme text color
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