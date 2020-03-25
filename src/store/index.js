import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {appState} from './reducers';

const store = createStore(appState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store