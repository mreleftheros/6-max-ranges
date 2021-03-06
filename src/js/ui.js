import Grid from "./grid";
import { saveToLocalStorage } from "./storage";

// global variables
const gridTitles = ["LJ opening range", "HJ opening range", "CO opening range", "BTN opening range", "SB opening range", "", "HJ defending range", "CO defending range", "BTN defending range", "SB defending range"];
let grids = [];
export const resetBtn = document.getElementById("resetBtn");

// function which initializes 10 grids
export default () => {
  for (let i = 0; i < 10; i++) {
    const grid = new Grid(gridTitles[i], 13, 13);
    grids.push(grid);
  }

  grids.forEach(grid => grid.render());
};

// function update the button clicked
export const updateBtn = e => {
  if (e.target.tagName !== "BUTTON") return; // check

  let gridIndex = e.target.parentElement.parentElement.getAttribute("data-index");
  let text = e.target.textContent;
  let color;

  if (e.target.classList.contains("white")) {
    color = "red";
    e.target.classList.remove("white");
  }
  else if (e.target.classList.contains("red")) {
    color = "blue";
    e.target.classList.remove("red");
  }
  else if (e.target.classList.contains("blue")) {
    color = "white";
    e.target.classList.remove("blue");
  }

  e.target.classList.add(color);

  // save to localStorage
  saveToLocalStorage(text, gridIndex, color);
};

// function that clears localStorage
export const clearLocalStorage = () => {
  let yesOrNo = confirm("Are you sure?");

  if (yesOrNo) {
    localStorage.clear();
    location.reload();
  }
}