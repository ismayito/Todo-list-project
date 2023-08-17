import retrieveFromStore from './retrieveFromStore.js';
import selectItem from './selectItem.js';

const displayList = () => {
  const todoList = document.querySelector('.todo-list-items');
  const welcomeMessageContainer = document.querySelector('.welcome-msg');
  welcomeMessageContainer.innerHTML = '';
  todoList.innerHTML = '';

  retrieveFromStore().forEach((item) => {
    const listItem = document.createElement('div');
    listItem.classList.add('list-div');
    const todoItem = document.createElement('input');
    todoItem.type = 'text';
    todoItem.classList.add('list-item');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox-item');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', `${item.index}`);

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

    listItem.appendChild(checkbox);
    listItem.appendChild(todoItem);
    const line = document.createElement('hr');
    todoItem.value = item.description;
    todoList.appendChild(listItem);
    todoList.appendChild(line);
  });
};

export default displayList;
