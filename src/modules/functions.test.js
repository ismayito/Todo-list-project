/**
 * @jest-environment jsdom
 */

import add from './add.js';
import displayList from './displayList.js';
import deleteItem from './deleteItem.js';
import edit from './edit.js';

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

  test ('testing edit function', () => {
    const editTask = document.createElement('input');
    editTask.classList.add('teskEdit');
    document.body.append(editTask);
    edit();
    const newTask = editTask.value;
    expect(newTask).toBe(editTask.value)
  })

});
