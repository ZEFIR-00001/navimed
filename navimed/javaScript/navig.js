document.addEventListener('DOMContentLoaded', function() {
    // Получаем текущий URL страницы
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Находим все кнопки навигации
    const navButtons = document.querySelectorAll('.nav-left .nav-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const navLeft = document.querySelector('.nav-left');
    
    // Удаляем класс active у всех кнопок
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    // Определяем, какая кнопка должна быть активной
    if (currentPage === 'raspisanie.html') {
        navButtons[1].classList.add('active'); // Расписание
    } else if (currentPage === 'map.html') {
        navButtons[2].classList.add('active'); // Карта поликлиники
    } else if (currentPage === 'index.html') {
        navButtons[3].classList.add('active'); // Запись
    }
    
    // Обработчики кликов для кнопок навигации
    navButtons[0].addEventListener('click', function() {
        // Проверить запись - можно добавить функционал позже
        console.log('Проверить запись');
    });
    
    navButtons[1].addEventListener('click', function() {
        if (currentPage !== 'raspisanie.html') {
            window.location.href = 'raspisanie.html';
        }
    });
    
    navButtons[2].addEventListener('click', function() {
        if (currentPage !== 'map.html') {
            window.location.href = 'map.html';
        }
    });
    
    navButtons[3].addEventListener('click', function() {
        if (currentPage !== 'index.html') {
            window.location.href = 'index.html';
        }
    });
    
    // Обработчик для бургер-меню
    menuBtn.addEventListener('click', function() {
        navLeft.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
});