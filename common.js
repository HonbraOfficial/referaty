window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  }
}

window.onscroll = function() {
  scrollFunction()
};
const mainHead = document.getElementById("main-head");
const headFill = document.querySelector(".head-fill");

headFill.style.height = mainHead.offsetHeight + "px";

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    mainHead.classList.add("scrolled");
  } else {
    mainHead.classList.remove("scrolled");
  }
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollbar").style.width = scrolled + "%";
}

function getData(url, then) {
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      then(this.responseText);
    }
  });

  xhr.open("GET", url);

  xhr.send(data);
}
