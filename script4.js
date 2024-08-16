// script.js
document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskDateTime = document.getElementById('task-datetime');
  
  const taskText = taskInput.value.trim();
  const taskTime = taskDateTime.value;

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskList = document.getElementById('task-list');

  const listItem = document.createElement('li');
  
  const taskDetails = document.createElement('span');
  taskDetails.textContent = `${taskText} - ${new Date(taskTime).toLocaleString()}`;

  const taskButtons = document.createElement('div');
  taskButtons.classList.add('task-buttons');
  
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    const newTaskText = prompt('Edit task:', taskText);
    const newTaskTime = prompt('Edit date and time:', taskTime);
    if (newTaskText) {
      taskDetails.textContent = `${newTaskText} - ${new Date(newTaskTime).toLocaleString()}`;
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  taskButtons.appendChild(completeButton);
  taskButtons.appendChild(editButton);
  taskButtons.appendChild(deleteButton);
  
  listItem.appendChild(taskDetails);
  listItem.appendChild(taskButtons);
  taskList.appendChild(listItem);

  taskInput.value = '';
  taskDateTime.value = '';
}
