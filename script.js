
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function moveButton(button) {
    const offset = 20; // Смещение от края экрана

    // Вычисляем доступные для перемещения диапазоны координат
    const availableWidth = window.innerWidth - button.offsetWidth - offset;
    const availableHeight = window.innerHeight - button.offsetHeight - offset;

    // Получаем случайные координаты в доступном диапазоне
    const x = getRandomNumber(offset, availableWidth);
    const y = getRandomNumber(offset, availableHeight);

    // Устанавливаем новые координаты для кнопки
    button.style.position = 'fixed'; // Используем fixed вместо absolute, чтобы предотвратить скроллинг
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Присваиваем обработчик события кнопке "Нет"
const noButton = document.getElementById('no');
noButton.addEventListener('mouseover', () => moveButton(noButton));

// Изменения при нажатии на кнопку "Да"
document.getElementById('yes').addEventListener('click', function() {
    // Изменяем текст заголовка
    document.querySelector('.container h2').textContent = 'Ура! Тогда вечером сериальчики :3';

    // Изменяем гифку
    document.getElementById('gif').src = 'https://tenor.com/view/cute-gif-25346669.gif';

    // Скрываем кнопки
    noButton.style.display = 'none';
    this.style.display = 'none';
});
