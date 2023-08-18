const listStore = (arrayList) => {
  localStorage.setItem('listStore', JSON.stringify(arrayList));
};
export default listStore;
