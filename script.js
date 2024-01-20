window.onload =  function() {
    setTimeout(() => {
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('.main').style.display = 'block';
    }, 600);

    setTimeout(() => {
        document.querySelector('.main').style.filter = 'blur(10px)';
    }, 4500);

    setTimeout(() => {
        document.querySelector('.welcome-popup').style.display = 'block';
    }, 5000);
    
};

function closePopup() {
    document.querySelector('.welcome-popup').style.display = 'none';
    document.querySelector('.main').style.filter = 'none';
}

const drawMenu = document.querySelector(".draw-menu");
const menuList = document.querySelector(".menu-list");
const animElement = document.getElementsByClassName('rise-animation');
let topbutton = document.querySelector('.gotop');

drawMenu.addEventListener("click", function () {
    menuList.classList.toggle("active");
    this.classList.toggle('clicked');
});

for (let index = 0; index < animElement.length; index++) {
    animElement[index].addEventListener('mouseover', () =>{
        animElement[index].classList.add('animation');
    });
}

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
