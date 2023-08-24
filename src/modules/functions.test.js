/**
 * @jest-environment jsdom
 */

import add from './add.js';
import displayList from './displayList.js';

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
});
