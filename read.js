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
    if (!location.hash || location.hash == "#") {
        location.hash = "home";
    }
    getData(`art/${location.hash.substr(1)}.md`, function(data) {
        document.querySelector("article").innerHTML = marked(data);
        document.querySelector("title").innerHTML = `${document.querySelector("article h1").innerHTML} - ${wintitle}`
    });
}

renderArticle();