const icons = document.querySelectorAll('.icon');
const liLinks = document.getElementsByClassName(".li-links");
const ulLinks = document.getElementById("ul-links");
const mccormickIcon = document.querySelector('.mccormickIcon');
const socialIcons = document.querySelector('.socials');

icons.forEach (icon => {  
  icon.addEventListener('click', () => {
    icon.classList.toggle("open");
    if (icon.classList.contains('open')) {
    ulLinks.style.visibility = "visible";
    }
    else {
        ulLinks.style.visibility = "hidden";
    }
  });
});

function mccormickClick() {
  mccormickIcon.classList.toggle("rotate-down");
  socialIcons.classList.toggle("icon-hidden");
}
