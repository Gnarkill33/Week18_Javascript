// Находим элементы DOM
const inputField = document.getElementById('input-field');
const taskContainer = document.querySelector('.task-container');

// Функция добавления задачи
function addTask () {
    if (inputField.value === "") {
        alert("Try again!");
    } else {
        let li = document.createElement('li');
        li.textContent = inputField.value;
        taskContainer.append(li);
    }
} 
