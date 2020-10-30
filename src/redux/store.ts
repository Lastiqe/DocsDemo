import { createStore, combineReducers, applyMiddleware } from "redux";
import { fireBaseDataReducer } from './firebaseDataReducer'
import thunk from 'redux-thunk';


let reducers = combineReducers({
    fireBaseDataReducer
})

declare global {
    interface Window { store: any; props: any; }
}



const store = createStore(reducers, applyMiddleware(thunk));

window.store = store
export default store