import retrieveFromStore from './retrieveFromStore.js';
import listStore from './listStore.js';

const selectItem = (id) => {
  const selectItems = retrieveFromStore();
  selectItems.forEach((item) => {
    if (item.index === id) {
      item.isCompleted = !item.isCompleted;
    }
  });

  listStore(selectItems);
  return retrieveFromStore();
};
export default selectItem;
