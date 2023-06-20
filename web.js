var slides = Array.from(document.querySelectorAll('.slide'));
var current = 0;

function update() {
    slides.forEach((slide, index) => {
        if(index === current) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    update();
});

document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    update();
});

update();
