import { combineReducers } from 'redux';
import { createStore } from 'redux';
import returnCounter from './reducers/counter';
import todoList from './reducers/todolist';

const reducer = combineReducers({ returnCounter, todoList });
const ReduxStore = createStore(reducer);

export default ReduxStore;
