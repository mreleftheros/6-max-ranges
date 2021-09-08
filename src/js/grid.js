const gridValues = ["A", "K", "Q", "J", "T", 9, 8, 7, 6, 5, 4, 3, 2];
const gridsContainer = document.getElementById("gridsContainer");

export default class Grid {
  constructor(title, columns, rows) {
    this.title = title;
    this.columns = columns;
    this.rows = rows;
  }

  create() {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grids-container__grid");

    for (let i = 0, cLen = this.columns; i < cLen; i++) {
      for (let j = 0, rLen = this.rows, suffix; j < rLen; j++) {
        const btnElement = document.createElement("button");
        suffix = i < j ? "s": i > j ? "o": "";

        btnElement.setAttribute("type", "button");
        btnElement.classList.add("grids-container__grid__btn");

        btnElement.textContent = `${gridValues[i]}${gridValues[j]}${suffix}`;

        gridElement.appendChild(btnElement);
      }
    }

    gridsContainer.appendChild(gridElement);
  }
}