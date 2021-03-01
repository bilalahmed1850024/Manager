import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from "redux-thunk"
import reducers from './src/reducers';
import Router from "./src/Router"

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDDhmOWp1Ogzs-yI0V0h4hy5I1KxlCh1rw',
      authDomain: 'manager1-11ffe.firebaseapp.com',
      databaseURL: 'https://manager1-11ffe.firebaseio.com',
      projectId: 'manager1-11ffe',
      storageBucket: 'manager1-11ffe.appspot.com',
      messagingSenderId: '1090734916825',
      appId: '1:1090734916825:web:0e2551ecd78d2b0db36ac8',
      measurementId: 'G-T2T0Q0REZR',
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  }
  render() {
    const store = createStore(reducers,{}, applyMiddleware(ReduxThunk)) 
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
