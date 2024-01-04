function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const fn = (arr) => {
  let newArr = arr.filter((element) => element != false);
  return newArr;
};

console.log(fn(["CocoMooja", 4, 0, 3, "", false, "apple", true]));
