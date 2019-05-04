// import { SET_ORDER_DETAIL_ID } from '../actions/actionTypes';

export function test(state = null, action) {
  switch (action.type) {
    case "test" :
      return action.data;
      break;
    default :
      return state;
  }
}