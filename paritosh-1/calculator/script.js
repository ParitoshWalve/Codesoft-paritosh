let display = document.getElementById("display");
let equation = "";

function appendToDisplay(value) {
    if (display.value === "0" && value !== "." || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
    equation += value;
}

function calculate() {
    try {
        display.value = eval(equation);
        equation = display.value;
    } catch (error) {
        display.value = "Error";
        equation = "";
    }
}

function clearDisplay() {
    display.value = "0";
    equation = "";
}
