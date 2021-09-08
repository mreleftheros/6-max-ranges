// function which checks localStorage and returns an array with items or empty array
const getFromLocalStorage = () => {
  let buttons;

  if (localStorage.getItem("buttons")) {
    buttons = JSON.parse(localStorage.getItem("buttons"));
  } else {
    buttons = [];
  }

  return buttons;
};

// function which takes text and color and sets it to the localStorage
export default (text, color) => {
  let buttons = getFromLocalStorage();
  let buttonIndex = buttons.findIndex(button => button.name === text);

  if (buttonIndex !== -1) { // exists
    buttons[buttonIndex].class = color;
  }
  else {
    buttons.push({name: text, class: color});
  }

  localStorage.setItem("buttons", JSON.stringify(buttons));
};