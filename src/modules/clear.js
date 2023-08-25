import checkStatus from './checkStatus.js';
import listStore from './listStore.js';

const clear = () => {
  const todoList = document.querySelector('.todo-list-items');

  let taskList = checkStatus();

  taskList = taskList?.filter((item) => item.isCompleted !== true);

  listStore(taskList);

  if (todoList) todoList.innerHTML = '';
};
export default clear;
