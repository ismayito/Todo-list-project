import listStore from './listStore.js';
import displayList from './displayList.js';
import retrieveFromStore from './retrieveFromStore.js';

// Add a todo item to the store;
const add = () => {
  function Todo(index, description, isCompleted = false) {
    this.index = index;
    this.description = description;
    this.isCompleted = isCompleted;
  }

  const inputField = document.querySelector('.todo-input');

  inputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const listArray = retrieveFromStore();
      const inputValue = inputField.value;
      const index = listArray.length + 1;
      const todoObject = new Todo(index, inputValue);
      listArray.push(todoObject);
      listStore(listArray);
      inputField.value = '';
      displayList();
      event.preventDefault();
    }
  });
};
export default add;
