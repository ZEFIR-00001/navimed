document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const requiredInputs = form.querySelectorAll('input[required]');
    const submitButton = form.querySelector('button');

    // Маска для номера полиса (из предыдущего примера)
    const policyInput = document.getElementById('policy');
    if (policyInput) {
        policyInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            let formattedValue = '';
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) formattedValue += ' ';
                formattedValue += value[i];
            }
            e.target.value = formattedValue.substring(0, 19);
        });
    }

    // Проверка перед отправкой
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Блокируем стандартную отправку
        let isValid = true;

        // Проверяем все обязательные поля
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                markAsInvalid(input);
                isValid = false;
            } else {
                markAsValid(input);
            }
        });

        // Дополнительная проверка для номера полиса (16 цифр)
        if (policyInput && policyInput.value.replace(/\s/g, '').length !== 16) {
            markAsInvalid(policyInput);
            isValid = false;
        }

        // Если всё valid, отправляем форму
        if (isValid) {
            alert('Форма успешно отправлена!');
            // form.submit(); // Раскомментируйте для реальной отправки
        } else {
            alert('Заполните все обязательные поля корректно!');
        }
    });

    // Сброс ошибок при начале ввода
    requiredInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                markAsValid(this);
            }
        });
    });

    // Визуальное выделение невалидных полей
    function markAsInvalid(input) {
        input.style.borderColor = '#ff0000';
        input.nextElementSibling?.remove(); // Удаляем старое сообщение, если есть
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.textContent = 'Обязательное поле';
        errorMsg.style.color = '#ff0000';
        errorMsg.style.fontSize = '12px';
        input.insertAdjacentElement('afterend', errorMsg);
    }

    function markAsValid(input) {
        input.style.borderColor = '#ccc';
        const errorMsg = input.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
        }
    }
});