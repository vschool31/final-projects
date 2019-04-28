import { combineReducers } from "redux";

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import learningReducer from './learning';
import authReducer from './auth';

const root = combineReducers({
    learning: learningReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default root;