// function which checks localStorage and returns an array with items or empty array
const getButtonsFromLocalStorage = () => {
  let buttons;

  if (localStorage.getItem("buttons")) {
    buttons = JSON.parse(localStorage.getItem("buttons"));
  } else {
    buttons = [];
  }

  return buttons;
};

// function which takes text and color and sets it to the localStorage
export const saveToLocalStorage = (text, gridIndex, color) => {
  let buttons = getButtonsFromLocalStorage();
  let buttonIndex = buttons.findIndex(button => (button.name === text) && (button.grid === gridIndex));

  if (buttonIndex !== -1) { // exists
    buttons[buttonIndex].class = color;
  }
  else {
    buttons.push({name: text, grid: gridIndex, class: color});
  }

  localStorage.setItem("buttons", JSON.stringify(buttons));
};

// function that checks localStorage for item with name equal to text given and returns the item if found or undefined
export const getItemFromLocalStorage = text => {
  let buttons = getButtonsFromLocalStorage();

  return buttons.find(button => button.name === text)
};