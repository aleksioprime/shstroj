const activeGalleryImage = document.querySelector('#slide-image');
const modalGallery = document.querySelector('.gallery-modal');
const imgGallery = document.querySelectorAll('.thumbnail-item img');
const closeIcon = document.querySelector('.slide-close');
let activeImageNumber = 0

function displayImage(e, index) {
    let src = e.target.src.split('/').filter(item => item !== 'thumb').join('/')
    activeGalleryImage.src = src;
    modalGallery.style.display = 'block';
    activeImageNumber = index;
    
}

imgGallery.forEach((img, index) => {img.addEventListener('click', (event) => {
    displayImage(event, index);
})}); 

function nextSlide(n) {
    activeImageNumber += n
    let countImgs = imgGallery.length
    if (activeImageNumber > countImgs - 1) { activeImageNumber = 0 } 
    if (activeImageNumber < 0) { activeImageNumber = countImgs - 1 } 
    activeGalleryImage.src = imgGallery[activeImageNumber].src.split('/').filter(item => item !== 'thumb').join('/'); 
}

function closeSlide() {
    modalGallery.style.display = 'none';
}

document.onkeydown = function(e) {
    switch (e.key) {
        case "ArrowLeft":
            nextSlide(1);
            break;
        case "ArrowRight":
            nextSlide(-1);
            break;
        case "Escape":
            closeSlide();
            break;
    }
};

closeIcon.addEventListener('click', closeSlide);
