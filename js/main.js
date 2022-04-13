const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-list");
const navLink = document.querySelector(".header-link");

hamburger.addEventListener("click", ()=>
{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
