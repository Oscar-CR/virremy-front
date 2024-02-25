document.addEventListener("DOMContentLoaded", function () {
    const container = document.body;
    const numCircles = 40;

    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement("div");
        circle.className = "circle";
        setRandomPosition(circle);
        setRandomSize(circle);
        circle.style.zIndex = "-1";
        container.appendChild(circle);
    }
});

function setRandomPosition(element) {
    const maxX = window.innerWidth;
    const maxY = document.documentElement.scrollHeight; // Modificado para obtener la altura completa de la página

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}

function setRandomSize(element) {
    const minSize = 10;
    const maxSize = 100;

    const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

    element.style.width = `${randomSize}px`;
    element.style.height = `${randomSize}px`;
}