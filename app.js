const search = document.querySelector(".search-inp")
const navLinks = document.querySelector(".navbar>.nav-links")
const sidebar = document.querySelector(".sidebar")

function searchFunc() {
    search.classList.toggle("hidded")
    navLinks.classList.toggle("hidded")
}

function sideBarOpen() {
    sidebar.style.right = "0"
}

function sideBarClose() {
    sidebar.style.right = "-200%"
}

const tests = document.querySelectorAll(".section10>.test-cont>.test");
const dot=document.querySelector(".section10>.slide>.dot")

let currentTest = 0;

function prevTest() {

    if (currentTest === 0) {
        currentTest = 2
    } else {
        currentTest--
    }
    tests[currentTest].classList.add("forword")
    tests[currentTest].classList.remove("reverse")
    tests.forEach((ele, ind) => {
        if (ind !== currentTest) {
            ele.classList.add("hidd")
            ele.classList.remove("forword")
            ele.classList.remove("reverse")
        }else{
            ele.classList.remove("hidd")
        }
    })

    if(currentTest==0){
        dot.style.order="0"
    }else if(currentTest==1){
        dot.style.order="2"
    }else{
        dot.style.order="4"
    }

}
function nextTest() {

    if (currentTest === 2) {
        currentTest = 0
    } else {
        currentTest++
    }
    tests[currentTest].classList.add("reverse")
    tests[currentTest].classList.remove("forword")
    tests.forEach((ele, ind) => {
        if (ind !== currentTest) {
            ele.classList.add("hidd")
            ele.classList.remove("forword")
            ele.classList.remove("reverse")
        }else{
            ele.classList.remove("hidd")
        }
    })

    if(currentTest==0){
        dot.style.order="0"
    }else if(currentTest==1){
        dot.style.order="2"
    }else{
        dot.style.order="4"
    }
}

