function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const fn = (a, b) => {
  return a == false ? a : b;
};

console.log(fn([true, "dog"]));
