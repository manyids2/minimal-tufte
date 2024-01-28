const setDark = (isDark) => {
  metaTheme.setAttribute("content", isDark ? "#000" : lightBg);
  htmlClass[isDark ? "add" : "remove"]("dark");
  localStorage.setItem("dark", isDark);
  setSyntaxDark(isDark);
};

const isDarkMode = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

function getStyleSheet(file_name) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if (sheet.href) {
      if (sheet.href.includes(file_name)) {
        return sheet;
      }
    }
  }
}

function setSyntaxDark(isDark) {
  var sheet_light = getStyleSheet("syntax_light");
  var sheet_dark = getStyleSheet("syntax_dark");

  sheet_light.disabled = isDark ? true : false;
  sheet_dark.disabled = isDark ? false : true;
}

setSyntaxDark(isDarkMode());
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    setSyntaxDark(isDarkMode());
  });

// https://codepen.io/bharatramnani94/post/copy-text-to-clipboard-using-vanilla-javascript
function copyText(event) {
  var btn = event.target;
  var div = btn.parentElement.parentElement;
  var code = div.querySelector("code");

  var elements = code.getElementsByClassName("line");
  var text = [];
  if (elements) {
    if (elements.length > 0) {
      for (var i = 0; i < elements.length; i++) {
        text.push(elements[i].innerText);
      }
      text = text.join("");
    } else {
      text = code.innerText;
    }
  }

  var myTemporaryInputElement = document.createElement("textarea");
  myTemporaryInputElement.type = "text";
  myTemporaryInputElement.value = text;
  document.body.appendChild(myTemporaryInputElement);

  myTemporaryInputElement.select();
  document.execCommand("Copy");
  document.body.removeChild(myTemporaryInputElement);
  console.log("copied:", text);

  btn.classList.add("copied");
  setTimeout(function() {
    btn.classList.remove("copied");
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  var elements = document.getElementsByClassName("copy-cmd");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", copyText);
  }
});
