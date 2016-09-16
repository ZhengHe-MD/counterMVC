import { observable, action } from 'mobx';

const counterStore = observable({ count: 0 });

counterStore.plusOne = action(() => {
  counterStore.count += 1;
})

counterStore.minusOne = action(() => {
  counterStore.count -= 1;
})

export default counterStore;
