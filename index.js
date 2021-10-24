const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const autoScroller = document.getElementById('autoScroll');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    document.body.classList.toggle('body_lock');
    autoScroller.classList.toggle('hide');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        document.body.classList.remove('body_lock');
        autoScroller.classList.remove('hide');
    })
})

const sun_moon_rotator = document.getElementById('mode_rotation');
const sunToggle = document.getElementById('sun');
const moonToggle = document.getElementById('moon');
let root = document.documentElement;

function rotate_sun_moon() {
    const currentRotation = parseInt(getComputedStyle(sun_moon_rotator).getPropertyValue('--rotation'));
    sun_moon_rotator.style.setProperty('--rotation', currentRotation + 180);
}

// this variable is used to check how many times the dark mode button has been clicked
let toggleChecker = 0;

function darkMode() {
    rotate_sun_moon();
    sunToggle.classList.toggle('dark');
    moonToggle.classList.toggle('dark');
    // toggle between the variable being 1 & 0  to determine which colors to change vars to
    if (toggleChecker == 0) {
        root.style.setProperty('--clr-light', '#333333');
        root.style.setProperty('--clr-dark', '#121212'); 
        root.style.setProperty('--clr-accent', '#3DECCF');
        root.style.setProperty('--clr-text2', '#fff');
        root.style.setProperty('--clr-footer', '#333333');
        toggleChecker = 1;
    }
    else {
        root.style.setProperty('--clr-light', '#fff');
        root.style.setProperty('--clr-dark', '#303030'); 
        root.style.setProperty('--clr-accent', '#16e0be');
        root.style.setProperty('--clr-text2', '#fff');
        root.style.setProperty('--clr-text2', '#303030');
        root.style.setProperty('--clr-footer', '#111');
        toggleChecker = 0;
    }
}




const dark = document.querySelector("input[name=darkMode_checker]");

dark.addEventListener('change', function doit() {
    if (this.checked) {
        darkMode();
        localStorage.setItem('darkmode', 'enabled');
    }
    else {
        darkMode();
        localStorage.setItem('darkmode', 'disabled');
    }
})


if(localStorage.getItem('darkmode') == 'enabled'){
    dark.click();
}


