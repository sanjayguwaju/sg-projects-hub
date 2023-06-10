document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', addTask);


  function addTask() {
    const taskText = taskInput.value;
    const listItem = document.createElement('li');
    const taskTextNode = document.createTextNode(taskText);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button'); // add delete-button class
    deleteButton.addEventListener('click', deleteTask);

    listItem.appendChild(taskTextNode);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
  }
  function deleteTask(event) {
    const listItem = event.target.parentNode;
    taskList.removeChild(listItem);
  }
});