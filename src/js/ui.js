import Grid from "./grid";

// global variables
const gridTitles = ["LJ opening range", "HJ opening range", "CO opening range", "BTN opening range", "SB opening range", "", "HJ defending range", "CO defending range", "BTN defending range", "SB defending range"];
let grids = [];

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

  console.log(e.target, e.target.classList.contains("white"));

  if (e.target.classList.contains("white")) {
    e.target.classList.remove("white");
    e.target.classList.add("red");
  }
  else if (e.target.classList.contains("red")) {
    e.target.classList.remove("red");
    e.target.classList.add("blue");
  }
  else if (e.target.classList.contains("blue")) {
    e.target.classList.remove("blue");
    e.target.classList.add("white");
  }
}