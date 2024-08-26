const buttonUp = document.getElementById('button-up');
const startSection = document.getElementById('start');

function checkScroll() {
    const startSectionTop = startSection.getBoundingClientRect().top;
    if (startSectionTop < 0) {
        buttonUp.classList.add('show');
    } else {
        buttonUp.classList.remove('show');
    }
}

window.addEventListener('scroll', checkScroll);

document.addEventListener('DOMContentLoaded', ()=> {
    checkScroll();

    const loader = document.getElementById('loader');

    loader.classList.add('hide-loader');

    document.body.style.overflow = 'auto';

});
