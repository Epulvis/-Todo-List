function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var newTask = document.createElement('li');
        newTask.innerHTML = taskInput.value + '<span class="delete" onclick="deleteTask(this)">Delete</span>';
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function deleteTask(element) {
    var taskList = document.getElementById('taskList');
    taskList.removeChild(element.parentNode);
}
