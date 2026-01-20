document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "nopoverty1.jpg",
        "nopoverty2.jpg",
        "nopoverty3.jpg",
        "nopoverty4.jpg",
        "nopoverty5.jpg"
    ];

    let currentIndex = 0;

    const carouselImage = document.getElementById("carouselImage");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        carouselImage.src = images[currentIndex];
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        carouselImage.src = images[currentIndex];
    });

    
});
