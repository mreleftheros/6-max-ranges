import Grid from "./grid";
// LJ opening range
// HJ opening range
// CO opening range
// BTN opening range
// SB opening range
//-
// HJ defending range
// CO defending range
// BTN defending range
// SB defending range
let grids = [];

const init = () => {
  for (let i = 0; i < 10; i++) {
    const grid = new Grid("sss", 13, 13);
    grids.push(grid);
  }

  grids.forEach(grid => grid.create());
}


document.addEventListener("DOMContentLoaded", init);
