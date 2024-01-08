function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const adv = (arr) => {
  let sortedArray = arr.sort((a, b) => {
    return a - b;
  });
  return sortedArray;
};

console.log(adv([5, 40, 0, -5]));
