function sRight(target) {
    console.log(target.parentNode)
    target.parentNode.querySelector('.services-items').scrollLeft += 200;
}

function sLeft(target) {
    console.log(target.parentNode)
    target.parentNode.querySelector('.services-items').scrollLeft -= 200;
}

function showMenu() { 
    document.getElementById("menu").classList.toggle("responsive");
}

let slideIndex = 1
showSlide(slideIndex);

function nextSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.querySelectorAll(".slide-image");
    let thumbnails = document.querySelectorAll(".thumbnail-item");
    if (n > slides.length - 1) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length - 1};
    slides.forEach((item, index) => {
        if (index == slideIndex-1) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    });
    thumbnails.forEach((item, index) => {
        if (index == slideIndex-1) {
            item.classList.add("active")
            item.scroll()
        } else {
            item.classList.remove("active")
        }
    })
}


let reviewIndex = 1
showReview(reviewIndex);

function nextReview(n) {
    showReview(reviewIndex += n);
}

function currentReview(n) {
    showReview(reviewIndex = n);
}

function showReview(n) {
    let reviews = document.querySelectorAll(".reviews-item");
    let dots = document.querySelectorAll(".dot-item");
    if (n > reviews.length) {reviewIndex = 1};
    if (n < 1) {reviewIndex = reviews.length};
    reviews.forEach((item, index) => {
        if (index == reviewIndex - 1) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    });
    dots.forEach((item, index) => {
        if (index == reviewIndex - 1) {
            item.classList.add("active")
            item.scroll()
        } else {
            item.classList.remove("active")
        }
    })
}