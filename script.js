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
