const scheduleData = [
            {"cabinet":"8","name":"Нажмудинова 3.М.","monday":"8:00-12:00","tuesday":"16:00-20:00","wednesday":"12:00-16:00","thursday":"8:00-12:00","friday":"16:00-20:00","saturday":"12:00-16:00"},
            {"cabinet":"10","name":"Курбанова Л.Ш.","monday":"8:00-12:00","tuesday":"16:00-20:00","wednesday":"12:00-16:00","thursday":"8:00-12:00","friday":"16:00-20:00","saturday":"13:00-16:00"},
            {"cabinet":"3","name":"Султанахмедова 3.А.","monday":"8:00-12:00","tuesday":"16:00-20:00","wednesday":"12:00-16:00","thursday":"8:00-12:00","friday":"16:00-20:00","saturday":"12:00-16:00"},
            {"cabinet":"4","name":"Магомедова П.Г.","monday":"8:00-12:00","tuesday":"16:00-20:00","wednesday":"12:00-16:00","thursday":"8:00-12:00","friday":"16:00-20:00","saturday":"13:00-16:00"},
            {"cabinet":"9","name":"Абдулкадырова Д.А.","monday":"8:00-12:00","tuesday":"16:00-20:00","wednesday":"12:00-16:00","thursday":"8:00-12:00","friday":"16:00-20:00","saturday":"12:00-16:00"},
            {"cabinet":"6","name":"Маммаева А.И.","monday":"8:00-12:00","tuesday":"16:00-20:00","wednesday":"12:00-16:00","thursday":"8:00-12:00","friday":"16:00-20:00","saturday":"12:00-16:00"},
            {"cabinet":"9","name":"Абдулаева М.А.","monday":"12:00-16:00","tuesday":"8:00-12:00","wednesday":"16:00-20:00","thursday":"12:00-16:00","friday":"13:00-16:00","saturday":"16:00-20:00"},
            {"cabinet":"З","name":"Амирханова П.Ш.","monday":"12:00-16:00","tuesday":"8:00-12:00","wednesday":"16:00-20:00","thursday":"12:00-16:00","friday":"13:00-16:00","saturday":"16:00-20:00"},
            {"cabinet":"7","name":"Магомедова П.Г.","monday":"12:00-16:00","tuesday":"8:00-12:00","wednesday":"16:00-20:00","thursday":"12:00-16:00","friday":"13:00-16:00","saturday":"16:00-20:00"},
            {"cabinet":"10","name":"Огурлиева Н.Б.","monday":"12:00-16:00","tuesday":"8:00-12:00","wednesday":"16:00-20:00","thursday":"12:00-16:00","friday":"13:00-16:00","saturday":"12:00-16:00"},
            {"cabinet":"4","name":"Атрачева С.А.","monday":"12:00-16:00","tuesday":"8:00-12:00","wednesday":"16:00-20:00","thursday":"12:00-16:00","friday":"13:00-16:00","saturday":"16:00-20:00"},
            {"cabinet":"8","name":"Шапиева А.М.","monday":"12:00-16:00","tuesday":"8:00-12:00","wednesday":"16:00-20:00","thursday":"12:00-16:00","friday":"13:00-16:00","saturday":"16:00-20:00"},
            {"cabinet":"6","name":"Амирасулова З.А.","monday":"12:00-14:15","tuesday":"10:00-12:15","wednesday":"16:00-18:15","thursday":"12:00-14:15","friday":"10:00-12:15","saturday":"16:00-18:15"},
            {"cabinet":"10","name":"Газимагомедова П.М.","monday":"16:00-20:00","tuesday":"12:00-16:00","wednesday":"8:00-12:00","thursday":"16:00-20:00","friday":"12:00-16:00","saturday":"13:00-16:00"},
            {"cabinet":"4","name":"Курбанова М.Н.","monday":"16:00-20:00","tuesday":"12:00-16:00","wednesday":"13:00-8:00","thursday":"16:00-20:00","friday":"12:00-16:00","saturday":"13:00-16:00"},
            {"cabinet":"8","name":"Дыдымова С.А","monday":"16:00-20:00","tuesday":"12:00-16:00","wednesday":"8:00-12:00","thursday":"16:00-20:00","friday":"12:00-16:00","saturday":"13:00-16:00"},
            {"cabinet":"7","name":"Аскерханова 3.О.","monday":"16:00-20:00","tuesday":"12:00-16:00","wednesday":"13:00-18:00","thursday":"16:00-20:00","friday":"12:00-16:00","saturday":"13:00-16:00"}
        ];

        function renderScheduleTable() {
            const tableContainer = document.getElementById('schedule-container');
            tableContainer.innerHTML = '';

            const table = document.createElement('table');
            table.className = 'schedule-table';

            // Создаем заголовок таблицы
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            
            ['№ кабинета', 'ФИО', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'].forEach(text => {
                const th = document.createElement('th');
                th.textContent = text;
                headerRow.appendChild(th);
            });
            
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Создаем тело таблицы
            const tbody = document.createElement('tbody');
            
            scheduleData.forEach(doctor => {
                const row = document.createElement('tr');
                
                ['cabinet', 'name', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].forEach(key => {
                    const td = document.createElement('td');
                    td.textContent = doctor[key];
                    row.appendChild(td);
                });
                
                tbody.appendChild(row);
            });
            
            table.appendChild(tbody);
            tableContainer.appendChild(table);
        }

        // Рендерим таблицу при загрузке страницы
        document.addEventListener('DOMContentLoaded', renderScheduleTable);