// Находим элементы DOM
const inputField = document.getElementById('input-field');
const taskContainer = document.querySelector('.task-container');
const clearButton = document.querySelector('.clear-button');

// Функция добавления задачи
function addTask () {
    if (inputField.value === "") {
        alert("Try again!");
    } else {
        let li = document.createElement('li');
        li.textContent = inputField.value;
        taskContainer.append(li);
        let bin = document.createElement('span');
        bin.classList.add('task-bin');
        li.append(bin);
        clearButton.disabled = false;
    }
    inputField.value = "";
    saveToLocalStorage();
} 

// Вычеркиваем элементы списка
taskContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle ('checked');
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentNode.remove();
    }
        saveToLocalStorage();
    }
);

// Сохраняем в localStorage
function saveToLocalStorage () {
    window.localStorage.setItem("tasks", taskContainer.innerHTML);
}

// Выводим на экран из localStorage
function showTasks () {
    taskContainer.innerHTML = localStorage.getItem('tasks');
}

showTasks ();

// Очищаем список
function clearTaskList () {
    taskContainer.innerHTML = "";
    window.localStorage.clear();
    clearButton.disabled = false;
}

clearButton.addEventListener('click', clearTaskList);