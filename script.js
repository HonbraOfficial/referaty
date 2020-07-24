window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
}

M.AutoInit();

renderArticle();

window.onhashchange = renderArticle;

function renderArticleList() {
    var html = "",
        articles = [];
    document.querySelectorAll(".index-articles a").forEach(function(elem) {
        articles.push({
            name: elem.innerHTML,
            url: elem.href
        });
    });
    articles.forEach(function(elem) {
        html += `<a href="${elem.url}" draggable="false" class="card waves-effect article-card">
        <div class="card-content">
            <span class="card-title">${elem.name}</span>
        </div>
    </a>`;
    });
    document.querySelector(".index-articles").innerHTML = html;
}

function renderArticle() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (!location.hash || location.hash == "#") {
        location.hash = "home";
    }
    getData(`https://honbra.com/referaty/art/${location.hash.substr(1)}.md`, function(data) {
        document.querySelector("article").innerHTML = marked(data);
        document.querySelector("title").innerHTML = `${document.querySelector("article h1").innerHTML} - HBReferáty`;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        if (document.querySelector(".index-articles")) {
            renderArticleList();
        }
    });
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