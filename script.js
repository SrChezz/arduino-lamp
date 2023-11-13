navigator.serviceWorker && navigator.serviceWorker.register("./sw.js").then(function (registration) { console.log("Excellent, registered with scope: ", registration.scope); });

const root = document.querySelector(':root');
const powerButton = document.getElementById("power");

powerButton.addEventListener("click", (e) => {

    rs = getComputedStyle(root);
    console.log(rs.getPropertyValue('--current-dark'));

    let currentSun = rs.getPropertyValue('--current-sun');

    let switchSound = new Audio("media/lamp.mp3");
    switchSound.volume = 0.2
    switchSound.play();



    if (currentSun == '#FFC436') {
        // root.style.setProperty('--current-dark', 'var(--day-dark)');
        // root.style.setProperty('--current-light', 'var(--day-light)');
        // root.style.setProperty('--current-color', 'var(--day-color)');
        root.style.setProperty('--current-sun', 'var(--day-sun)');
    } else {
        // root.style.setProperty('--current-dark', 'var(--night-dark)');
        // root.style.setProperty('--current-light', 'var(--night-light)');
        // root.style.setProperty('--current-color', 'var(--night-color)');
        root.style.setProperty('--current-sun', 'var(--night-sun)');
    }
});
