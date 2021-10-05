import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/redux/root-reducer'
import rootSaga from './src/redux/root-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore( rootReducer, applyMiddleware(sagaMiddleware) );

sagaMiddleware.run(rootSaga);

export default store;

// export default createStore(rootReducer);