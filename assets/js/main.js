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
