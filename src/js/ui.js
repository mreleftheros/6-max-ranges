import Grid from "./grid";

const gridTitles = ["LJ opening range", "HJ opening range", "CO opening range", "BTN opening range", "SB opening range", "", "HJ defending range", "CO defending range", "BTN defending range", "SB defending range"];
let grids = [];

export default () => {
  for (let i = 0; i < 10; i++) {
    const grid = new Grid(gridTitles[i], 13, 13);
    grids.push(grid);
  }

  grids.forEach(grid => grid.render());
};

