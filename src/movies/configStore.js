/* eslint-disable no-empty-pattern */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/root";
import rootSaga from "./saga/rootSaga";
// Logger with default options
import logger from 'redux-logger';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
export const configStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(
            sagaMiddleware,
            logger
        )
    );
    // Then run the saga
    sagaMiddleware.run(rootSaga);
    return store;
}

