import React from "react";
import ReactDOM from "react-dom";

import "assets/scss/material-kit-react.css";
import "assets/scss/self_stile.css";

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { composeWithDevTools} from 'redux-devtools-extension';
import fbConfig from './config/firebase'

import rootReducer from './store/reducers/root';
import App from "./App";

const store = createStore(rootReducer, composeWithDevTools(compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(fbConfig)
)));


// для быстрого добавления в firestore
//const lol = [];
//lol.map(x => getFirestore().collection('tasks').add(x));

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById("root")
    );
});
