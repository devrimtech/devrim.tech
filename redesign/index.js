const icons = document.querySelectorAll('.icon');
const liLinks = document.getElementsByClassName(".li-links");
const ulLinks = document.getElementById("ul-links");

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