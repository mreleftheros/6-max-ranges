import init, { updateBtn, resetBtn, clearLocalStorage } from "./ui";
import { gridsContainer } from "./grid";


document.addEventListener("DOMContentLoaded", init);
gridsContainer.addEventListener("click", updateBtn);
resetBtn.addEventListener("click", clearLocalStorage);