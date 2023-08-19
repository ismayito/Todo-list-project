import retrieveFromStore from './modules/retrieveFromStore.js';
import add from './modules/add.js';
import displayList from './modules/displayList.js';
import './style.css';

add();
displayList();

const welcomeMessageContainer = document.querySelector('.welcome-msg');
document.addEventListener('DOMContentLoaded', () => {
  if (retrieveFromStore().length === 0) {
    const welcomeMessage = document.createElement('p');
    welcomeMessage.innerText = 'Please there are no todo items. Please you can add some';
    welcomeMessageContainer.appendChild(welcomeMessage);
  } else {
    displayList();
  }
});
