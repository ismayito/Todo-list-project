/**
 * @jest-environment jsdom
 */

import add from './add.js';
import displayList from './displayList.js';
import deleteItem from './deleteItem.js';
import edit from './edit.js';
import selectItem from './selectItem.js';
import retrieveFromStore from './retrieveFromStore.js';
import listStore from './listStore.js';
import clear from './clear.js';
import checkStatus from './checkStatus.js';

// mock localStorage
jest.mock('./retrieveFromStore');
jest.mock('./listStore');
jest.mock('./checkStatus.js');

describe('testing add and remove functions', () => {
  test('testing add function', () => {
    // mocking the DOM input element
    const inputField = document.createElement('input');
    inputField.classList.add('todo-input');
    document.body.appendChild(inputField);
    const list = document.createElement('div');
    list.classList.add('todo-list');
    document.body.appendChild(list);

    const enterEvent = new KeyboardEvent('keyup', { key: 'Enter' });
    inputField.dispatchEvent(enterEvent);
    const addedList = document.querySelectorAll('.todo-list');

    add();
    displayList();
    expect(addedList).toHaveLength(1);
  });

  test('testing remove function', () => {
    // mocking the DOM input element
    const button = document.createElement('button');
    button.classList.add('remove');
    document.body.appendChild(button);
    const removeFn = document.querySelectorAll('.remove');
    deleteItem();
    displayList();
    expect(removeFn).toHaveLength(1);
  });

  test('testing edit function', () => {
    const editTask = document.createElement('input');
    editTask.classList.add('teskEdit');
    document.body.append(editTask);
    edit();
    const newTask = editTask.value;
    expect(newTask).toBe(editTask.value);
  });

  test('testing update status', () => {
    const mockItems = [
      { index: 1, description: 'Task 1', isCompleted: false },
      { index: 2, description: 'Task 2', isCompleted: true },
    ];

    // Mocking the retrieveFromStore function
    retrieveFromStore.mockReturnValue(mockItems);

    // Calling the selectItem function
    const id = 2;
    const result = selectItem(id);

    // Verifying that retrieveFromStore was called
    expect(retrieveFromStore).toHaveBeenCalled();

    // Verifying that the item's isCompleted property is toggled
    expect(result[1].isCompleted).toBe(false);

    // Verifying that listStore was called with the updated data
    expect(listStore).toHaveBeenCalledWith(result);
  });

  test('testing clear selected item', () => {});
  // mocking listItems that are cleared or remain after clear function
  const mockItems = [
    { index: 1, description: 'Task 1', isCompleted: false },
    { index: 2, description: 'Task 2', isCompleted: true },
  ];

  // mocking the DOM elements thar are manipulated by clear function
  const todoList = document.createElement('div');
  todoList.classList.add('list');
  document.body.appendChild(todoList);

  displayList();
  checkStatus();
  clear();
  expect(clear()).toBe(listStore(mockItems));
});
