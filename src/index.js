import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index.js';
import {Provider} from 'react-redux';
import {HashRouter as Router} from "react-router-dom"
import 'styles/index.scss';
import App from './views/App';
import * as serviceWorker from './serviceWorker';

// if app is installed on desktop
// how to determine whether it is the first time ???
if(window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true) {
    window.resizeTo(600, 370);
}

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </Router> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if(process.env.NODE_ENV === 'development') {
    serviceWorker.unregister();
} else {
    serviceWorker.register();
}