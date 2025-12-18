let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

fetch('monsters.json')
    .then(response => response.json())
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function displayData(monsters) {
    const container = document.getElementById('infoBox');
    let htmlContent = '';
    monsters.forEach(monster => {
        htmlContent += `
            <div class="monsterBox">
                <h2>${monster}</h2>
                <p>${location}</p>
                <p>${size}</p>
                <p>${dangerous}</p>
                <p>${information}</p>
            </div>
        `;
    });
    container.innerHTML = htmlContent;

}