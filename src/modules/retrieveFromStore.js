const listFromStore = () => {
  const retrieveFromStore = JSON.parse(localStorage.getItem('listStore')) || [];
  return retrieveFromStore;
};

export default listFromStore;
