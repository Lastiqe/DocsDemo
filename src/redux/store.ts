import { createStore, combineReducers, applyMiddleware } from "redux";
import { fireBaseDataReducer } from './firebaseDataReducer'
import thunk from 'redux-thunk';


const reducers = combineReducers({
    fireBase: fireBaseDataReducer
})

export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunk));

export default store