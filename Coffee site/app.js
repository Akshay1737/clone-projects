const testimonials = document.querySelectorAll(".testimonial");
const testimonialList = document.querySelector(".testimonial-list");
const nextBtn = document.querySelector(".swiper-button-next");
const prevBtn = document.querySelector(".swiper-button-prev");

let index = 0; // Current slide index

// Update the slide position
function updateSlide() {
    const slideWidth = testimonials[0].clientWidth;
    testimonialList.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Next button click
nextBtn.addEventListener("click", () => {
    if (index < testimonials.length - 1) {
        index++;
    } 
    updateSlide();
});

// Previous button click
prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
    }
    updateSlide();
});

// Handle screen resizing
window.addEventListener("resize", updateSlide);
