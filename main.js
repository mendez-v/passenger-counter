let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let resetBtn = document.getElementById("reset-btn");

let count = 0;
let saveCount = "";


incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
resetBtn.addEventListener("click", clear);


function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  saveCount += count + " - ";
  saveEl.textContent = "Previous entries: " + saveCount.slice(0, -3);
  count = 0;
  countEl.textContent = count;
}

function clear() {
  saveCount = "";
  saveEl.textContent = "Previous entries:"
}