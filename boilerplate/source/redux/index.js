import {createStore, combineReducers} from 'redux';
import * as test from './reducers/test'
// import * as restaurant from './reducers/restaurant';
// import * as orders from './reducers/orders';
// import * as user from './reducers/user';
// import * as checkout from './reducers/checkout';
// import * as orderHistory from './reducers/orderHistory';
// import * as orderv2 from './reducers/ordersv2';
// import * as loading from './reducers/loading';

const rootReducer = combineReducers({
  ...test,
  // ...restaurant,
  // ...orders,
  // ...user,
  // ...checkout,
  // ...orderHistory,
  // ...orderv2,
  // ...loading,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;