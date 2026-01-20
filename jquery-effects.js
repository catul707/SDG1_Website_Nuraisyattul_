document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("imageWrapper");
    const images = document.querySelectorAll("#imageWrapper img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    function updateCarousel() {
        // Calculate how much to slide (index * 100%)
        const offset = -currentIndex * 100;
        wrapper.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });
});