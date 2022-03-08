import { createStore, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from '../../application/redux/reducers';
import rootSaga from '../../infrstructure/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;