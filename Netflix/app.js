document.getElementById("rightBtn").addEventListener("click", function () {
    document.querySelector(".card-container").scrollLeft += 220;
});

document.getElementById("leftBtn").addEventListener("click", function () {
    document.querySelector(".card-container").scrollLeft -= 220;
});
function toggleAnswer(index) {
    let answers = document.querySelectorAll(".answer");
    let icons = document.querySelectorAll(".icon");

    answers[index].classList.toggle("open");
    icons[index].classList.toggle("rotate");
}
