import retrieveFromStore from './retrieveFromStore.js';
import selectItem from './selectItem.js';
import deleteItem from './deleteItem.js';
import clear from './clear.js';
import edit from './edit.js';

const displayList = () => {
  const todoList = document.querySelector('.todo-list-items');
  const welcomeMessageContainer = document.querySelector('.welcome-msg');
  if (welcomeMessageContainer) {
    welcomeMessageContainer.innerHTML = '';
  }
  if (todoList) {
    todoList.innerHTML = '';
  }
  const todoTasks = retrieveFromStore();
  function renderTodo() {
    if (todoTasks) {
      todoTasks.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-div');
        listItem.setAttribute('id', `list-${item.index}`);
        const todoItem = document.createElement('input');
        todoItem.type = 'text';
        todoItem.classList.add('list-item');
        todoItem.setAttribute('id', `input-${item.index}`);
        const checkbox = document.createElement('input');
        checkbox.classList.add('checkbox-item');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', `${item.index}`);
        const deleteButton = document.createElement('i');
        deleteButton.classList.add('fa-solid');
        deleteButton.classList.add('fa-trash-can');
        deleteButton.setAttribute('id', `btn-${item.index}`);
        deleteButton.style.display = 'none';

        listItem.appendChild(checkbox);
        listItem.appendChild(todoItem);
        listItem.appendChild(deleteButton);
        todoItem.value = item.description;
        todoList.appendChild(listItem);

        // check if checkbox is checked or not and change state
        checkbox.addEventListener('change', () => {
          const isChecked = checkbox.checked;
          if (isChecked) {
            todoItem.style.textDecoration = 'line-through';
          } else {
            todoItem.style.textDecoration = 'none';
          }
          selectItem(item.index);
        });

        // delete or remove item
        deleteButton.addEventListener('click', () => {
          deleteItem(item.index);
        });

        // show the delete button on onBlur of the list item
        todoItem.addEventListener('focus', () => {
          deleteButton.style.display = 'block';
        });

        // edit task
        todoItem.addEventListener('change', () => {
          edit(item.index);
        });

        // clear all tasks
        const clearButton = document.querySelector('.clear-all');
        clearButton.addEventListener('click', () => {
          clear();
        });
      });
    }
  }
  renderTodo();
};

export default displayList;
