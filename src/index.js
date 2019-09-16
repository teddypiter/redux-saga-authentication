import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Store from './store/index';

render(
   <Provider store={Store}>
     <App />
   </Provider>,
document.getElementById('root'),
);
