const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const illustration = document.getElementById('illustration');

let isSun = true;

illustration.addEventListener('click', () => {
    if (isSun) {
        sun.style.opacity = 0;
        moon.style.opacity = 1;
    } else {
        sun.style.opacity = 1;
        moon.style.opacity = 0;
    }

    isSun = !isSun;
});
