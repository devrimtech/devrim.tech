const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const fancytext = document.querySelector(".fancy-text");
const strText = fancytext.textContent;
const splitText = strText.split("");
const typeText = ['design websites', 'program games', 'develop apps', 'code software', 'use Arch btw', 'type up my blog', 'make podcasts', 'write stories', 'love to learn'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let char = 0;
let timer = setInterval(onTick, 50);

fancytext.textContent = '';

console.log(splitText);

for (let i = 0; i < splitText.length; i++) {
    fancytext.innerHTML += '<span class="fancySpan">' + splitText[i] + '</span>';
}

(function type (){
    if (count === typeText.length) {
        count = 0;
    }
    currentText = typeText[count];
    letter = currentText.slice(0, index++);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {
        count++;

        // if(index > 0) {
             //currentText.length--;
             //letter.length--;
             //currentText--;
             
        // }
        //else {
            
        index = 0;
        console.log(`currentText.length: ${currentText.length} letter.length: ${letter.length} count: ${count} index: ${index} letter: ${letter}`);
    }
setTimeout(type, 250);

}())

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