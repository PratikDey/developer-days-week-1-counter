let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let display = document.getElementById("display");
let count = 0;

plus.addEventListener("click", () => {
  count++;
  updateDisplay();
});
minus.addEventListener("click", () => {
  count--;
  updateDisplay();
});
function updateDisplay() {
  display.innerHTML = count;
}
