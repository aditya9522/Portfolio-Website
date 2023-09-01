
const drawMenu = document.querySelector(".draw-menu");
const menuList = document.querySelector(".menu-list");
let topbutton = document.querySelector('.gotop');

// to hide or unhide the navbar
drawMenu.addEventListener("click", function () {
    menuList.classList.toggle("active");
    this.classList.toggle('clicked');
});

// to get visibility to gotop button after scrolling 600px
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop >600 || document.documentElement.scrollTop > 600) {
        topbutton.style.display = 'block';
    }
    else {
        topbutton.style.display = 'none';
    }
}

// defining gototop fn which had called in gotop button after clicking
function gototop() {
    // to reach on the top
    document.body.scrollTop = 0;       // works in safari
    document.documentElement.scrollTop = 0;   // works in crome, firefox, opera, internet explorer
}

