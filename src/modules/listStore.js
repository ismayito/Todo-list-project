const listStore = (arrayList) => {
  const store = localStorage.setItem('listStore', JSON.stringify(arrayList));
  return store;
};
export default listStore;
