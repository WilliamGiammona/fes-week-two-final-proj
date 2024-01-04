function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const fn = (arr) => {
  let newArr = arr.map((item) => {
    return !!item == true ? true : false;
  });
  return newArr;
};

console.log(fn(["CocoMooja", 4, 0, 3, "", false, "apple", true]));
