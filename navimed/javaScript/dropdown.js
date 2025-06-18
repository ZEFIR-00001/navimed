document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('specialist');
    const dropdown = document.querySelector('.dropdown-content');
    const items = document.querySelectorAll('.dropdown-item');

    // Открытие/закрытие списка при клике на поле ввода
    input.addEventListener('click', function() {
        dropdown.classList.toggle('show');
    });

    // Выбор пункта из списка
    items.forEach(item => {
        item.addEventListener('click', function() {
            input.value = item.textContent;
            dropdown.classList.remove('show');
        });
    });

    // Закрытие списка при клике вне его
    document.addEventListener('click', function(event) {
        if (!event.target.matches('#specialist') && !event.target.matches('.dropdown-item')) {
            dropdown.classList.remove('show');
        }
    });
});