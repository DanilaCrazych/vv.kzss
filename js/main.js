
const images = ["/images/image2.jpg", "/images/image3.jpg", "/images/image1.jpg"];
let index = 0;
const preloadedImages = images.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

function changeBackground() {
    document.querySelector(".home").style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 5000);

function toggleMenu() {
    let menu = document.getElementById("mobileMenu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}