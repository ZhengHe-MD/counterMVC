import { observable, action } from 'mobx';

const counterState = observable({ count: 0 });

counterState.plusOne = action(() => {
  counterState.count += 1;
})

counterState.minusOne = action(() => {
  counterState.count -= 1;
})

export default counterState;
