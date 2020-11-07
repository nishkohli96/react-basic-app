import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import storageSession from 'redux-persist/lib/storage/session'

import returnCounter from './reducers/counter';
import todoList from './reducers/todolist';

const rootReducer = combineReducers({ returnCounter, todoList });  

/*  Can use localStorage or sessionStorage for web; AsyncStorage for react-native.
    Session storage data, wud be reset to initial state, if tab closed. */
const persistConfig = {
    key: 'root',
    storage: storageSession
}
   
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor };
