function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const fn = (a) => {
  return a.length;
};

console.log(fn([true, "dog", ""]));
