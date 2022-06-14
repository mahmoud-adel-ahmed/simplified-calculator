import { Calculator } from "./claculator.js";

let allNumbersBtns = document.querySelectorAll("[data-number]");
let allOperations = document.querySelectorAll("[data-operation]");
let deleteBtn = document.querySelector("[data-delete]");
let clearAllBtn = document.querySelector("[data-clear-all]");
let equalBtn = document.querySelector("[data-equals]");
let prevOperandElement = document.querySelector("[data-prev-operand]");
let currentOperandElement = document.querySelector("[data-current-operand]");

let calculator = new Calculator(prevOperandElement, currentOperandElement);

allNumbersBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    calculator.appendNumber(numberBtn.innerHTML);
    calculator.updateDisplay();
  });
});

allOperations.forEach((operation) => {
  operation.addEventListener("click", () => {
    calculator.chooseOperation(operation.innerHTML);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

clearAllBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
