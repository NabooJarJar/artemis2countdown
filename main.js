document.addEventListener("DOMContentLoaded", function () {
    const launchDate = new Date("2025-11-10T17:47:00Z").getTime(); // Replace with actual launch time

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    setInterval(updateCountdown, 1000);

    // Particle Star Background
    const canvas = document.createElement("canvas");
    document.getElementById("star-background").appendChild(canvas);
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = Array(200).fill().map(() => {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.2
        };
    });

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function animateStars() {
        stars.forEach(star => {
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
        drawStars();
        requestAnimationFrame(animateStars);
    }

    animateStars();

    // Generate Floating Cubes
    const cubeContainer = document.getElementById("cube-background");
    for (let i = 0; i < 50; i++) {
        let cube = document.createElement("div");
        cube.classList.add("cube");
        cube.style.left = Math.random() * window.innerWidth + "px";
        cube.style.top = Math.random() * window.innerHeight + "px";
        cube.style.animationDuration = Math.random() * 10 + 5 + "s";
        cubeContainer.appendChild(cube);
    }
});
