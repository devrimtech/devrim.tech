let replace_text = document.getElementById("front_Replace");

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const fancytext = document.querySelector(".fancy-text");
const strText = fancytext.textContent;
const splitText = strText.split("");
const typeText = ['design websites', 'program games', 'develop apps', 'code software', 'use Arch btw', 'type up my blog', 'make podcasts', 'write stories', 'love to learn'];
let count = 0;

fancytext.textContent = '';

console.log(splitText);

for (let i = 0; i < splitText.length; i++) {
    fancytext.innerHTML += '<span class="fancySpan">' + splitText[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = fancytext.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if (char == splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
})