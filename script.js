let currentImageIndex = 0;
let isZoomed = false;

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    showImage();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    resetZoom();
}

function showImage() {
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");

    const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10","img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg", "img15.jpg", "img16.jpg", "img17.jpg"];
    lightboxImg.src = images[currentImageIndex - 1];
    caption.innerHTML = "Image " + currentImageIndex;

    if (isZoomed) {
        resetZoom();
    }
}

function zoomToggle() {
    const lightboxImg = document.getElementById("lightbox-img");
    isZoomed = !isZoomed;

    if (isZoomed) {
        lightboxImg.style.transform = "scale(1.2)";
    } else {
        lightboxImg.style.transform = "scale(1)";
    }
}

function resetZoom() {
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.style.transform = "scale(1)";
    isZoomed = false;
}
