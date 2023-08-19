import checkStatus from './checkStatus.js';
import listStore from './listStore.js';
// eslint-disable-next-line import/no-cycle
import displayList from './displayList.js';

const clear = () => {
  const todoList = document.querySelector('.todo-list-items');

  let taskList = checkStatus();
  taskList = taskList.filter((item) => item.isCompleted !== true);

  listStore(taskList);

  todoList.innerHTML = '';
  displayList();
};
export default clear;
