document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Website Loaded");

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            console.log(`Navigating to: ${event.target.textContent}`);
        });
    });
});
