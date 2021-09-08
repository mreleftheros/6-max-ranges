const gridValues = ["A", "K", "Q", "J", "T", 9, 8, 7, 6, 5, 4, 3, 2];
const gridsContainer = document.getElementById("gridsContainer");

export default class Grid {
  constructor(title, columns, rows) {
    this.title = title;
    this.columns = columns;
    this.rows = rows;
  }

  render() {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grids-container__grid");

    const fragment = new DocumentFragment();

    const gridButtons = document.createElement("div");
    gridButtons.classList.add("grids-container__grid__buttons");
    
    const gridTitleElement = document.createElement("div");
    gridTitleElement.classList.add("grids-container__grid__title");
    gridTitleElement.textContent = this.title;

    for (let i = 0, cLen = this.columns; i < cLen; i++) {
      for (let j = 0, rLen = this.rows, suffix; j < rLen; j++) {
        const btnElement = document.createElement("button");
        suffix = i < j ? "s": i > j ? "o": "";

        btnElement.setAttribute("type", "button");
        btnElement.classList.add("grids-container__grid__buttons__btn");

        btnElement.textContent = `${gridValues[i]}${gridValues[j]}${suffix}`;

        gridButtons.appendChild(btnElement);
      }
    }
    
    gridElement.appendChild(gridButtons);
    gridElement.appendChild(gridTitleElement);

    gridsContainer.appendChild(gridElement);
  }
}