const photos = [
    "../img/IMG_3240.JPG",
    "../img/IMG_3275.JPG",
    "../img/IMG_3316.JPG",
    // 添加更多照片
];


const gallery = document.getElementById("photo-gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");

photos.forEach((photoSrc) => {
    const photoElement = document.createElement("img");
    photoElement.src = photoSrc;
    photoElement.alt = "照片";
    photoElement.classList.add("photo");
    gallery.appendChild(photoElement);

    // 為每張照片添加點擊事件
    photoElement.addEventListener("click", () => {
        lightboxImage.src = photoSrc;
        lightbox.style.display = "block";
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
