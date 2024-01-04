function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const fn = (arr) => {
  let newArr = arr.map((item) => {
    return 0;
  });
  return newArr;
};

console.log(fn(["CocoMooja", 4, 3, true]));
