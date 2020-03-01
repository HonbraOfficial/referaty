M.AutoInit();

function elemCreate(inputElem, inputText, inputClass, inputId, inputParent) {
  var element = document.createElement(inputElem);
  var elementText = document.createTextNode(inputText);
  element.appendChild(elementText);
  element.className = inputClass;
  element.id = inputId;
  document.getElementById(inputParent).appendChild(element);
}

function indexSubmit() {
  if (document.getElementById("indexText").value) {
    if (
      document.getElementById("indexText").value == "755309" ||
      document.getElementById("indexText").value == "104544" ||
      document.getElementById("indexText").value == "190766"
    ) {
      lhref(document.getElementById("indexText").value + ".html");
    } else {
      document.getElementById("indexText").value = "Špatný kód!";
    }
  }
}

function lhref(h) {
  location.href = h;
}

function searchh(x) {
  myPopup("https://duckduckgo.com/?q=" + x, "web", 750, 500);
}

function myPopup(myURL, title, myWidth, myHeight) {
  var left = (screen.width - myWidth) / 2;
  var top = (screen.height - myHeight) / 4;
  var myWindow = window.open(
    myURL,
    title,
    "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
      myWidth +
      ", height=" +
      myHeight +
      ", top=" +
      top +
      ", left=" +
      left
  );

  window.myWindow = myWindow;
}
