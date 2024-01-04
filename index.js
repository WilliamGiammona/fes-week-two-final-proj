function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const fn = (numArr) => {
  let lrgNum = numArr[0];
  for (i = 0; i < numArr.length; i++) {
    if (numArr[i] > lrgNum) {
      lrgNum = numArr[i];
    }
  }
  return lrgNum;
};

console.log(fn([-30, -4, -7, -5]));
