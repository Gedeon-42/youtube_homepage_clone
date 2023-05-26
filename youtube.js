var menuIcon = document.querySelector(".menu-icon");
var sidenav = document.querySelector(".sidenav");
var container = document.querySelector(".container");
menuIcon.onclick = function () {
    sidenav.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}