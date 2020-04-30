mdc.autoInit();

const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
const MDCDrawer = mdc.drawer.MDCDrawer;


const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

if (document.querySelector(".article__title")) {
    document.querySelector("title").innerHTML = document.querySelector(".article__title").innerHTML + " | " + document.querySelector("title").innerHTML;
}

addRipple(".mdc-list-item");
addRipple(".mdc-card__primary-action");

if (document.querySelector(".index")) {
    displayArticles();
}

function addRipple(selector, unbounded) {
    if (document.querySelector(selector)) {
        if (unbounded) {
            var elems = document.querySelectorAll(selector);
            for (var elem of elems) {
                var ripple = new mdc.ripple.MDCRipple(elem);
                ripple.unbounded = true;
            }
        } else {
            var elems = document.querySelectorAll(selector);
            for (var elem of elems) {
                new mdc.ripple.MDCRipple(elem);
            }
        }
    }
}

function displayArticles() {
    var i,
        x = "";
    var apiout = articleDB();
    for (i in apiout.articles) {
        x +=
            '<div class="mdc-card mdc-card--outlined"> <div class="mdc-card__primary-action" tabindex="0" onclick="lhref(\'' +
            apiout.articles[i].link +
            '\')"><div class="mdc-card__primary"><div class="mdc-typography--headline6">' +
            apiout.articles[i].name +
            ' </div><div class="mdc-typography mdc-typography--subtitle2">' +
            apiout.articles[i].desc +
            "</div></div></div></div>";
    }
    document.querySelector(".index-cont").innerHTML = x;
    addRipple(".mdc-card__primary-action");
}

function articleDB() {
    return {
        articles: [{
                name: "Popelka a stalking",
                desc: "Pohádka - Literatura",
                link: "articles/98849.html"
            },
            {
                name: "Steré pověsti české",
                desc: "Čtenářský deník - Literatura",
                link: "articles/104544.html"
            },
            {
                name: "Module 3 project",
                desc: "Referát - CTM",
                link: "articles/190766.html"
            },
            {
                name: "Srp z pravěku",
                desc: "Referát - Dějepis",
                link: "articles/755309.html"
            }
        ]
    };
}

/*
 {
                name: "Jak upéct chleba",
                desc: "Referát - Český jazyk",
                link: "articles/824068.html"
            },
*/

function lhref(link) {
    location.href = link;
}
