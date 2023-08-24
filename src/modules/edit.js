import listStore from './listStore.js';
import retrieveFromStore from './retrieveFromStore.js';

const edit = (item) => {
  const todoTasks = retrieveFromStore();
  const editTask = document.getElementById(`input-${item}`);
  todoTasks.forEach((todoItem) => {
    if (todoItem.index === item) {
      todoItem.description = editTask.value;
    }
  });
  listStore(todoTasks);
};

export default edit;
