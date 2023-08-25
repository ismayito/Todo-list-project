import retrieveFromStore from './retrieveFromStore.js';
import listStore from './listStore.js';

const deleteItem = (id) => {
  const deleteButton = document.getElementById(`btn-${id}`);
  const returnedItems = retrieveFromStore();
  if (returnedItems) {
    returnedItems.filter((item) => item.index !== id);
    //  update the indices of the remaining items
    returnedItems.forEach((item, index) => {
      item.index = index;
    });
  }
  // const returnedItems = retrieveFromStore().filter((item) => item.index !== id);
  // update the indices of the remaining items
  // returnedItems.forEach((item, index) => {
  //   item.index = index;
  // });

  if (deleteButton) {
    deleteButton.parentElement.remove();
  }
  listStore(returnedItems);
};
export default deleteItem;
