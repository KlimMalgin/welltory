import { 
    INCREMENT
    } from '../constants/tools';

const initialState = {
  
  /**
   * Счетчик для тестов. Можно делать эмит экшена increment()
   * и при изменении этого счетчика выполнять любые действия
   */
  increment: 0
  
};

export default function editor(state = initialState, action) {
  switch (action.type) {

    case INCREMENT:
        return { ...state, increment: state.increment + 1 };

    default:
        return state;
  }
}
