let shareIcon = document.getElementById("share-icon");
let shareDash = document.querySelector(".share");

shareIcon.addEventListener("click", () => {
    shareDash.classList.toggle("active");
});
