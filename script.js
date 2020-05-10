window.addEventListener('load', function() {
    window.setTimeout(function() { pageLoaded(); }, 3000);

})

window.onbeforeunload = function() {
    pageUnloaded();
}

window.addEventListener("beforeunload", function(e) {
    pageUnloaded();
}, false);

var url_string = window.location.href;
var url = new URL(url_string);
var article = url.searchParams.get("!");

if (article) {
    getJSON(`art/${article}.md`, function(result) {
        document.querySelector("main").innerHTML = marked(result);
        pageLoaded();
    });
} else {
    var article = "home";
    getJSON(`art/${article}.md`, function(result) {
        document.querySelector("main").innerHTML = marked(result);
        pageLoaded();
    });
}

document.querySelector(".menu").onclick = function() {
    if (document.querySelector(".nav").className == "nav") {
        document.querySelector(".nav").className = "nav nav-opened";
    } else {
        document.querySelector(".nav").className = "nav";
    }
}

function pageLoaded() {
    document.querySelector("body").classList.add("loaded");
}

function pageUnloaded() {
    document.querySelector("body").classList.remove("loaded");
}

function getJSON(url, after) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
            after(this.responseText);
        }
    });

    xhr.open("GET", url);

    xhr.send(data);
}