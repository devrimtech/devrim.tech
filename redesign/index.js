const icons = document.querySelectorAll('.icon');
const liLinks = document.getElementsByClassName(".li-links");
const ulLinks = document.getElementById("ul-links");
const mccormickAfter = window.getComputedStyle(document.querySelector('.mccormick'), ':after');


icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
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
  mccormickAfter.transform = "matrix(-1, 0, 0, 1, 0, 0)";
  console.log("rotate");
}
