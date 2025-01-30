function showOutfits(mood) {
    let outfits = {
        romantic: '<img src="images/romantic.jpg" alt="Romantic Outfit">',
        cozy: '<img src="images/cozy.jpg" alt="Cozy Outfit">',
        chill: '<img src="images/chill.jpg" alt="Chill Outfit">'
    };
    document.getElementById("mood-outfit-display").innerHTML = outfits[mood] || '';
}

let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}
showSlides();


const shopButtons = document.querySelectorAll('.outfit-card button');
shopButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        console.log('Hovered on button!');
    });
});
