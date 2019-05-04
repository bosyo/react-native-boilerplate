import React, {Component} from 'react';
import { Provider } from 'react-redux'
import configureStore from '../redux';
import RootContainer from './rootContainer';

const store = configureStore();

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}
