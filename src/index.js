import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './system/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

