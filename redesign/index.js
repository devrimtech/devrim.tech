const icons = document.querySelectorAll('.icon');
const liLinks = document.getElementsByClassName(".li-links");
const ulLinks = document.getElementById("ul-links");
const mccormickIcon = document.querySelector('.mccormickIcon');
const socialIcons = document.querySelector('.socials');



icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle("open");
    if (icon.classList.contains('open')) {
      ulLinks.style.visibility = "visible";
    } else {
      ulLinks.style.visibility = "hidden";
    }
  });
});

function mccormickClick() {
  mccormickIcon.classList.toggle("rotate-down");
  socialIcons.classList.toggle("icon-hidden");
}

var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
  loop: true
});

typewriter
  .typeString('> ')
  .typeString('Programmer')
  .pauseFor(1500)
  .deleteChars(10)
  .typeString('Writer')
  .pauseFor(1500)
  .deleteChars(6)
  .typeString('Designer')
  .pauseFor(1500)
  .deleteChars(8)
  .typeString('Gamer')
  .pauseFor(1500)
  .deleteChars(5)
  .typeString('Tinkerer')
  .pauseFor(1500)
  .deleteChars(8)
  .typeString('Hacker')
  .pauseFor(1500)
  .deleteChars(6)
  .typeString('Dreamer')
  .pauseFor(1500)
  .deleteChars(7)
  .start()