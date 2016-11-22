/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Navigator,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';
//Pages
import Signup from './src/pages/Signup';
import Login from './src/pages/Login';
import Account from './src/pages/Main';
import styles from './src/styles/mainstyle.js'
import * as firebase from 'firebase';  // Initialize Firebase
  var fireBaseconfig = {
    apiKey: "AIzaSyB2-E6fydvyv7msUDo8_L_-6YIVr4qhJcQ",
    authDomain: "todo-f8ac9.firebaseapp.com",
    databaseURL: "https://todo-f8ac9.firebaseio.com",
    storageBucket: "todo-f8ac9.appspot.com",
    messagingSenderId: "835190050138"
  };
  // firebase.initializeApp(fireBaseconfig);
const firebaseApp = firebase.initializeApp(fireBaseconfig);

export class todo extends Component {
  constructor(props){
    super(props);
    this.state={
      openingPage: null
    }
  }
  componentWillMount(){
    //Check if userData is stored on device else open Login
    AsyncStorage.getItem('userData').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      let openingPage = {openingPage: Login};
      if(user_data != null){
        this.setState({openingPage:Account});
      }else{
        this.setState(openingPage);
      }
    });

  }
  render() {
    if (this.state.openingPage) {
      return (
        // Take the user to whatever page we set the state to.
        // We will use a transition where the new page will slide in from the Left.
        <Navigator
          initialRoute={{component: this.state.openingPage}}
          configureScene={() => {
            return Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft;
          }}
          renderScene={(route, navigator) => {
            if(route.component){
              // Pass the navigator the the page so it can navigate as well.
              // Pass firebaseApp so it can make calls to firebase.
              return React.createElement(route.component, { navigator, firebaseApp});
            }
        }} />
      );
    } else {
      return (
        // Our default loading view while waiting to hear back from firebase
        <View style={styles.container}>
          <ToolbarAndroid title="Login" />
          <View style={styles.body}>
            <ActivityIndicator size="large" />
          </View>
        </View>
      );
}
  }
}


AppRegistry.registerComponent('todo', () => todo);
