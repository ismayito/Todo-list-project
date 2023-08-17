import listStore from './listStore.js';
import displayList from './displayList.js';
import retrieveFromStore from './retrieveFromStore.js';

// Add a todo item to the store;
const add = () => {
  const itemFromStore = retrieveFromStore();
  const listArray = itemFromStore;
  function Todos(index, description, isCompleted = false) {
    this.index = index;
    this.description = description;
    this.isCompleted = isCompleted;
  }

  const inputField = document.querySelector('.todo-input');

  inputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const inputValue = inputField.value;
      const index = listArray.length;
      const todoObject = new Todos(index, inputValue);
      listArray.push(todoObject);
      listStore(listArray);
      inputField.value = '';
      displayList();
      event.preventDefault();
    }
  });
};

export default add;
