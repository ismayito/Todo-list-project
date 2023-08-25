const retrieveFromStore = () => {
  const retrieveFromStore = localStorage.getItem('listStore');
  return retrieveFromStore ? JSON.parse(retrieveFromStore) : [];
};

export default retrieveFromStore;
