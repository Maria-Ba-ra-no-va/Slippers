document.addEventListener('DOMContentLoaded', function () {

    function timer(deadline) {
        // id таймера
        let timerId = null;

        // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
        function countdownTimer() {
            const diff = deadline - new Date();
            if (diff <= 0) {
                clearInterval(timerId);
            }

            const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) : 0;
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
            const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
            $hours.textContent = hours < 10 ? '0' + hours : hours;
            $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
            $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        }
        // получаем элементы, содержащие компоненты даты
        const $hours = document.querySelector('.timer__hours');
        const $minutes = document.querySelector('.timer__minutes');
        const $seconds = document.querySelector('.timer__seconds');
        // вызываем функцию countdownTimer
        countdownTimer();
        // вызываем функцию countdownTimer каждую секунду
        timerId = setInterval(countdownTimer, 1000);
    }

    // конечная дата
    const deadline = new Date(2023, 08, 21, 15);

    timer(deadline);

    function photo() {
        let photoSmall = [];

        photoSmall = document.querySelectorAll('.photo-small-div');
        document.querySelector('.photo-small__black').style.backgroundImage = 'url(images/black.jpg)';
        document.querySelector('.photo-small__orange').style.backgroundImage = 'url(images/orange.jpg)';
        document.querySelector('.photo-small__pink').style.backgroundImage = 'url(images/pink.jpg)';
        document.querySelector('.photo-small__yellow').style.backgroundImage = 'url(images/yellow.jpg)';

        photoSmall.forEach((el) => {
            el.addEventListener('click', function (event) {
                photoSmall.forEach((el) => {
                    el.style.opacity = 1;
                });
                event.preventDefault();
                event.target.style.opacity = 0.4;

                document.querySelector('.basic__photo-big').style.backgroundImage = event.target.style.backgroundImage;
                document.querySelector('.basic__photo-big').style.transition = "background-image .5s ease-in-out"
            })
        })
    }
    photo();

});