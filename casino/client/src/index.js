import React from 'react';
import ReactDOM from 'react-dom';
import Center from 'react-center'
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageGame from './reducers/manageGame';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export function configureStore(){
  return createStore(manageGame, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
