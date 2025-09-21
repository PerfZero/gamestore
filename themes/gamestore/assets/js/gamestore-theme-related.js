//darkmode

let styleMode = localStorage.getItem("styleMode");
const StyleToggle = document.querySelector(".header-mode-switcher");

const enableDarkStyle = () => {
  document.body.classList.add("dark-mode-gemstore");
  localStorage.setItem("styleMode", "dark");
};

const disableDarkStyle = () => {
  document.body.classList.remove("dark-mode-gemstore");
  localStorage.setItem("styleMode", "light");
};

if (StyleToggle) {
  StyleToggle.addEventListener("click", () => {
    styleMode = localStorage.getItem("styleMode");
    if (styleMode !== "dark") {
      enableDarkStyle();
    } else {
      disableDarkStyle();
    }
  });
}

if(styleMode === 'dark'){
    enableDarkStyle();
}