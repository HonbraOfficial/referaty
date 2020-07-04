var url_string = window.location.href;
var url = new URL(url_string);
var article = url.searchParams.get("!");

const wintitle = document.querySelector("title").innerHTML;


if (article) {
    location.href = location.href.split("/")[0] + window.location.pathname + "#" + article;
}

if (!location.hash || location.hash == "#") {
    location.hash = "home";
}

window.onhashchange = renderArticle;

function renderArticle() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (!location.hash || location.hash == "#") {
        location.hash = "home";
    }
    getData(`art/${location.hash.substr(1)}.md`, function(data) {
        document.querySelector("article").innerHTML = marked(data);
        document.querySelector("title").innerHTML = `${document.querySelector("article h1").innerHTML} - ${wintitle}`;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        var url = location.href.split("index.html").join("").split("honbra.com").join("honbraofficial.github.io").split("honbraofficial.github.io/referaty/").join("bit.ly/hbreferaty");
        document.getElementById("share").innerHTML = url;
        document.getElementById("shareimg").src = "" + url;
        load();
    });
}

renderArticle();

window.onbeforeunload = unload;

function unload() {
    document.querySelector("main").style.opacity = 0;
    document.querySelector("#main-head .head .title").classList.add("center");
}

function load() {
    window.setTimeout(function() {
        document.querySelector("main").style.opacity = 1;
        document.querySelector("#main-head .head .title").classList.remove("center");
    }, 500);
}