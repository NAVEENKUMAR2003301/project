const search=document.querySelector(".search-inp")
const navLinks=document.querySelector(".navbar>.nav-links")
const sidebar=document.querySelector(".sidebar")

function searchFunc(){
    search.classList.toggle("hidded")
    navLinks.classList.toggle("hidded")
}

function sideBarOpen(){
    sidebar.style.right="0"
}

function sideBarClose(){
    sidebar.style.right="-200%"
}