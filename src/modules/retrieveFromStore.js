const retrieveFromStore = () => {
  const retrieveFromStore = JSON.parse(localStorage.getItem('listStore')) || [];
  return retrieveFromStore;
};

export default retrieveFromStore;
