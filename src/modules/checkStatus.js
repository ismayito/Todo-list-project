import retrieveFromStore from './retrieveFromStore.js';

const checkStatus = () => {
  const listCheck = retrieveFromStore();
  return listCheck;
};

export default checkStatus;
