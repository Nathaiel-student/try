var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
    settingsMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on"); // Corrected line
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}

let countdownTime = 10; // Set countdown time
const countdownDisplay = document.querySelector('.countdown');
const video = document.getElementById('video');

const startCountdown = () => {
    const countdownInterval = setInterval(() => {
        if (countdownTime > 0) {
            countdownDisplay.textContent = countdownTime; // Update countdown display
            countdownTime--;
        } else {
            clearInterval(countdownInterval); // Clear the interval
            countdownDisplay.style.display = 'none'; // Hide countdown
            video.style.display = 'block'; // Show video
            video.play(); // Start playing the video
        }
    }, 1000); // Update every second
};

window.onload = startCountdown; // Start countdown on page load
