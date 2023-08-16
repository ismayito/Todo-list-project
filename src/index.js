import './style.css';

const todoArray = [
  {
    description: 'wash car',
    index: 1,
    completed: true,
  },
  {
    description: 'Visit the doctor',
    index: 2,
    completed: true,
  },
  {
    description: 'Attend prayes',
    index: 3,
    completed: true,
  },
];

const todoList = document.getElementById('todo-list');

todoArray.forEach((item) => {
  const listItem = document.createElement('div');
  listItem.classList.add('list-div');
  const todoItem = document.createElement('li');
  todoItem.classList.add('list-item');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  listItem.appendChild(checkbox);
  listItem.appendChild(todoItem);
  const line = document.createElement('hr');
  todoItem.innerHTML = item.description;
  todoList.appendChild(listItem);
  todoList.appendChild(line);
});
