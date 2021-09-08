import init, { updateBtn } from "./ui";
import { gridsContainer } from "./grid";

document.addEventListener("DOMContentLoaded", init);
gridsContainer.addEventListener("click", updateBtn);