const navbar = document.getElementById("navbarstick");
const offset = navbar.offsetTop;
function stickNavbar() {
    if (window.pageYOffset >= 10) {
        navbar.classList.add("stickynav");
    } else {
        navbar.classList.remove("stickynav");
    }
}
window.addEventListener("scroll", stickNavbar);


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })


})

const stories = [...document.querySelectorAll('.stories-carousel-row')];
const nxtBtnstories = [...document.querySelectorAll('.nxt-btn-stories')];


stories.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtnstories[i].addEventListener('click', () => {
        console.log('hhh')
        item.scrollLeft += containerWidth;
    })


})
