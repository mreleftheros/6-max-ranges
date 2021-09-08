// function which checks localStorage and returns an array with items or empty array
const getFromLocalStorage = () => {
  let buttons;

  if (localStorage.getItem("buttons")) {
    buttons = localStorage.getItem("buttons");
  } else {
    buttons = [];
  }

  return buttons;
};

// const saveToLocalStorage = (name, class) => {

// };