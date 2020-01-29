document.getElementById("qr").src = ("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + location.href);
document.getElementById("link").innerHTML = location.href;

function searchh(x) {
  myPopup(('https://duckduckgo.com/?q=' + x), "web", 750, 500);
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