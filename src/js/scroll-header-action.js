const cssScroll = "scroll";
const scrollHeight = 50;
const forScroll = document.querySelector(".website");

document.addEventListener('scroll', documentScroll);

function documentScroll() {
    if (window.scrollY > scrollHeight) {
        switchToScroll();
    } else {
        removeScroll();
    }
}

function switchToScroll() {
    if (!forScroll.classList.contains(cssScroll)) {
        forScroll.classList.add(cssScroll);
    }
}

function removeScroll() {
    if (forScroll.classList.contains(cssScroll)) {
        forScroll.classList.remove(cssScroll);
    }
}