import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { todoLostReducer } from './reducer'
import thunk from 'redux-thunk';

export const store = createStore(
    todoLostReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

