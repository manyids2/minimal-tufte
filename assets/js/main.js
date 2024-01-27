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

// Copy button
function createCopyButton(highlightDiv) {
  const button = document.createElement("button");
  button.className = "copy-code-button";
  button.type = "button";
  button.innerText = "Copy";
  button.addEventListener("click", () =>
    copyCodeToClipboard(button, highlightDiv),
  );
  addCopyButtonToDom(button, highlightDiv);
}

async function copyCodeToClipboard(button, highlightDiv) {
  const codeToCopy = highlightDiv.querySelector(
    ":last-child > .chroma > code",
  ).innerText;
  try {
    result = await navigator.permissions.query({ name: "clipboard-write" });
    if (result.state == "granted" || result.state == "prompt") {
      await navigator.clipboard.writeText(codeToCopy);
    } else {
      copyCodeBlockExecCommand(codeToCopy, highlightDiv);
    }
  } catch (_) {
    copyCodeBlockExecCommand(codeToCopy, highlightDiv);
  } finally {
    codeWasCopied(button);
  }
}

function copyCodeBlockExecCommand(codeToCopy, highlightDiv) {
  const textArea = document.createElement("textArea");
  textArea.contentEditable = "true";
  textArea.readOnly = "false";
  textArea.className = "copyable-text-area";
  textArea.value = codeToCopy;
  highlightDiv.insertBefore(textArea, highlightDiv.firstChild);
  const range = document.createRange();
  range.selectNodeContents(textArea);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  textArea.setSelectionRange(0, 999999);
  document.execCommand("copy");
  highlightDiv.removeChild(textArea);
}

function codeWasCopied(button) {
  button.blur();
  button.innerText = "Copied!";
  setTimeout(function () {
    button.innerText = "Copy";
  }, 2000);
}

function addCopyButtonToDom(button, highlightDiv) {
  highlightDiv.insertBefore(button, highlightDiv.firstChild);
  const wrapper = document.createElement("div");
  wrapper.className = "highlight-wrapper";
  highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
  wrapper.appendChild(highlightDiv);
}

addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".highlight")
    .forEach((highlightDiv) => createCopyButton(highlightDiv));
});
