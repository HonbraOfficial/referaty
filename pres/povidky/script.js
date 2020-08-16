const MDCRipple = mdc.ripple.MDCRipple;

window.onresize = onResize;

function onResize() {
    var wrapper = document.querySelector("slides");
    var wrapperwidth = 1920;
    var wrapperheight = 1080;
    var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var ratio = Math.min(vw / wrapperwidth, vh / wrapperheight);
    wrapper.style.transform = `translate(-50%, -50%) scale(${ratio})`;
}

onResize();

let currentSlide = 1;

document.getElementById("prev").onclick = function() {
    increaseSlide(-1);
};

document.getElementById("next").onclick = function() {
    increaseSlide(1);
};

document.querySelector("slides").onclick = function() {
    increaseSlide(1);
};

document.onkeydown = function(event) {
    if (event.code == "ArrowRight" || event.code == "Space") {
        increaseSlide(1);
    } else if (event.code == "ArrowLeft") {
        increaseSlide(-1);
    }
}

function navigateToSlide(number) {
    var element = document.querySelector("slides");
    document.querySelectorAll("slides slide").forEach(function(elem) {
        elem.classList.remove("active");
    });
    document.querySelectorAll("slides slide")[number - 1].classList.add("active");
    element.scrollTop = element.clientHeight * (number - 1);
}

function increaseSlide(number) {
    var slides = document.querySelectorAll("slides slide").length;
    navigateToSlide(currentSlide + number);
    currentSlide = currentSlide + number;
    if (currentSlide == 0) {
        currentSlide = 1;
    }
    if (currentSlide == slides + 1) {
        currentSlide = slides;
    }
}

document.querySelectorAll(".mdc-fab").forEach(function(elem) {
    elem.classList.add("mdc-ripple-surface");
    var ripple = new MDCRipple(elem);
});

/* 
function getToken(settings) {
    fetch("https://api.agilixbuzz.com/cmd", {
            body: `{"request": {"cmd": "login", "username": "${settings.username}", "password": "${settings.password}"}}`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        .then(response => response.json())
        .then(data => console.log(data.response._token));
}

getToken({
    "username": "ctm/jan.brabec.2529",
    "password": "jan.brabec"
});

sendMail({
    "title": "Respond quick",
    "body": "Please respond if you got this message.",
    "token": ""
});

function sendMail(settings) {
    fetch(`https://api.agilixbuzz.com/cmd?cmd=sendmail&enrollmentid=126231172&_token=${settings.token}`, {
            body: `{
            "email":{
              "enrollments":{
                "enrollment":[{
                  "id": "126231172"
                }]
              },
              "subject":{
                "$value": "${settings.title}"
              },
              "body":{
                "$value": "${settings.body}"
              }
            }
          }`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        .then(response => response.json())
        .then(data => console.log(data.response))
} */