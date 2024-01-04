function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const fn = (arr) => {
  const newArr = arr.filter((item) => (item === "apple" ? false : true));
  return newArr;
};

console.log(fn(["CocoMooja", 4, 3, "apple", true]));
