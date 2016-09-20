// Слайдер
(function () {

    var slide = document.getElementById('slide');
    var count = 0;

    slide.addEventListener('click', function () {

        if (count == 0) {
            slide.style.backgroundImage = "url('http://i.5sfer.com/post/postImage/8ipwnn.jpg')";
            count = 1;
        } else {
            slide.style.backgroundImage = "url('http://7oom.ru/wp-content/uploads/foto-priroda-23.jpg')";
            count = 0;
        }

    }, false);
})();

