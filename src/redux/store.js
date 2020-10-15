import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];
// using the spread syntax on the middlewares
// to make the middleware dynamic (adding and removing more middleware)
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
