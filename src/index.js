import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createStore from './store'
import { Provider } from './react-redux'
import reducer from './reducer'
import * as serviceWorker from './serviceWorker';
let store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
