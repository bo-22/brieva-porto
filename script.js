function selectOption(optionId) {
    var slider = document.getElementById('slider');
    var sliderPilihan = document.getElementById('sliderPilihan');
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');

    // Frame
    var homeFrame = document.getElementById('frameTab1');
    var photosFrame = document.getElementById('frameTabPhotos');

    if (optionId === 'option1') {
        // UI Slider
        slider.style.left = '12%';
        sliderPilihan.style.left = '4px';
        option1.style.color = '#ffffff';
        option2.style.color = '#ffffff37';

        // Home -> center, Photos -> move right off-screen
        homeFrame.style.transform = "translateX(calc(-50%))";
        homeFrame.style.opacity = "1";

        photosFrame.style.transform = "translateX(calc(-50% + 120vw))";
        photosFrame.style.opacity = "0";

    } else {
        // UI Slider
        slider.style.left = '62%';
        sliderPilihan.style.left = '52%';
        option1.style.color = '#ffffff37';
        option2.style.color = '#ffffff';

        // Home -> move left off-screen, Photos -> center
        homeFrame.style.transform = "translateX(calc(-50% - 120vw))";
        homeFrame.style.opacity = "0";

        photosFrame.style.transform = "translateX(calc(-50%))";
        photosFrame.style.opacity = "1";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var slides = Array.from(document.querySelectorAll('.pap-slide'));
    var indicators = Array.from(document.querySelectorAll('.pap-indicator'));
    var activeIndex = 0;
    var intervalId;

    function showSlide(index) {
        activeIndex = (index + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
            slide.classList.toggle('is-active', slideIndex === activeIndex);
        });
        indicators.forEach(function (indicator, indicatorIndex) {
            var isActive = indicatorIndex === activeIndex;
            indicator.classList.toggle('is-active', isActive);
            indicator.setAttribute('aria-current', String(isActive));
        });
    }

    function startAutoplay() {
        window.clearInterval(intervalId);
        intervalId = window.setInterval(function () { showSlide(activeIndex + 1); }, 5000);
    }

    indicators.forEach(function (indicator, index) {
        indicator.addEventListener('click', function () { showSlide(index); startAutoplay(); });
    });

    if (slides.length > 1) { startAutoplay(); }
});
