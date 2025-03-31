const search=document.querySelector(".search-inp")
const navLinks=document.querySelector(".navbar>.nav-links")

function searchFunc(){
    search.classList.toggle("hidded")
    navLinks.classList.toggle("hidded")
}