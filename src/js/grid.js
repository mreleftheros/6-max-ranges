import { getItemFromLocalStorage } from "./storage";

const gridValues = ["A", "K", "Q", "J", "T", 9, 8, 7, 6, 5, 4, 3, 2];
let gridIndex = 0;
export const gridsContainer = document.getElementById("gridsContainer");

// Grid class
export default class Grid {
  constructor(title, columns, rows) {
    this.title = title;
    this.columns = columns;
    this.rows = rows;
  }

  render() {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grids-container__grid");
    gridElement.setAttribute("data-index", gridIndex);

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
        let text = `${gridValues[i]}${gridValues[j]}${suffix}`;
        let color;

        let item = getItemFromLocalStorage(text, gridIndex);

        color = (item && item.class !== "white") ? item.class : "white";
        
        btnElement.classList.add(color);
        btnElement.setAttribute("type", "button");
        btnElement.classList.add("grids-container__grid__buttons__btn");

        btnElement.textContent = text;

        fragment.appendChild(btnElement);
      }
    }

    gridIndex++;
    
    gridButtons.appendChild(fragment);
    gridElement.appendChild(gridButtons);
    gridElement.appendChild(gridTitleElement);
    gridsContainer.appendChild(gridElement);
  }
}