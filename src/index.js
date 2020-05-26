import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { HashRouter as Router } from "react-router-dom"
import 'styles/index.scss';
import App from './views/App';
import * as serviceWorker from './serviceWorker';

// if app is installed on desktop
// how to determine whether it is the first time ???
if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true) {
    window.resizeTo(600, 370);
}

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </Router>,
    document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
    serviceWorker.unregister();
} else {
    serviceWorker.register( {
        onUpdate: (reg) => {
            // show a confirm popup to ask user if he/she would like to reload the page to see new contents
            let confirmed = window.confirm('New content is avaliable, would you like to reload the page to use the new contents?')
            console.log("user action: ", confirmed);
            if(confirmed) {
                console.log('user confirmed to reload');
                reg.waiting && reg.waiting.postMessage({type: "SW.SKIP_WAITING"});
            }
        }
    });
}


// service worker's message is received via ServiceWorkerContainer's message event, not the Window's message event;
// window.addEventListener('message', e => {
// });

// window.navigator.serviceWorker.addEventListener('controllerchange', (e) => {
//     // when the page is first loaded, controller changes from null to some service worker, this event will also fire
//     window.location.reload();
// });
