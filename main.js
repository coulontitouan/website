document.addEventListener('DOMContentLoaded', function () {
    function changeOpacity() {
        let html = document.getElementsByTagName('html').item(0)
        html.style.opacity = 1
    }
    setTimeout(changeOpacity, 500)
}, false);


let i = 0;
let elements = document.querySelector("#title").children;
let textsList = Array.from(elements).map(function (element) {
    return element.textContent || element.innerText;
});
let currentElement = 0;

function typeWriter() {
    if (i < textsList[currentElement].length) {
        elements[currentElement].innerHTML = elements[currentElement].innerHTML.replace("<br>", "");
        elements[currentElement].innerHTML += textsList[currentElement].charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    } else {
        currentElement++;
        if (currentElement < elements.length) {
            setTimeout(startTyping, 500);
        }
    }
}

function startTyping() {
    i = 0;
    typeWriter();
}


if ("ontouchstart" in document.documentElement || window.matchMedia("(pointer:none), (pointer:coarse)").matches || true) {
    document.getElementById("title").classList.add("mobile");
    Array.from(elements).forEach(function (element) {
        element.innerHTML = "<br>";
    })
    setTimeout(startTyping, 1500);
}

// Ce morceau de code n'est jamais éxecuté mais je prefere le garder ici
if (0 == 1) {
    let logos = document.getElementsByTagName("object");
    for (let logo of logos) {
        logo.addEventListener('load', function () {
            for (let item of logo.contentWindow.document.getElementsByTagName('path')) {
                item.style.fill = "snow"
            }
        }
        )
    }
}