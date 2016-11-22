'use strict';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';
import React, {Component} from 'react';
import { Header,Container,Title, Content, List, ListItem, InputGroup, Input, Icon, Picker, Button } from 'native-base';

import Login from './Login';
import styles from '../styles/mainstyle.js';

// Styles specific to the account page
const accountStyles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
});

export default class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:null,
      loading: true,
    }
  }

  componentWillMount() {
    // get the current user from firebase
    // const userData = this.props.firebaseApp.auth().currentUser;
    AsyncStorage.getItem('userData').then((user_data_json) => {
      let userData = JSON.parse(user_data_json);
      this.setState({
        user: userData,
        loading: false
      });
    });

  }

  render() {
    // If we are loading then we display the indicator, if the account is null and we are not loading
    // Then we display nothing. If the account is not null then we display the account info.
    const content = this.state.loading ?
    <ActivityIndicator size="large"/> :
       this.state.user &&
                 <Content>
                    <View style={accountStyles.email_container}>
                      <Text style={accountStyles.email_text}>{this.state.user.email}</Text>
                    </View>
                    <Image
                      style={styles.image}
                      source={{uri: this.state.user.photoURL}} />
                    <Button onPress={this.logout.bind(this)} style={styles.primaryButton}>
                      Logout
                    </Button>
                </Content>
      ;
      // console.log("loading user",this.state.user,this.state.loading);
    return (
        <Container>
        <Header>
            <Title>Header</Title>
        </Header>
          {content}
      </Container>
    );
  }

  logout() {
    // logout, once that is complete, return the user to the login screen.
    AsyncStorage.removeItem('userData').then(() => {
      this.props.firebaseApp.auth().signOut().then(() => {
        this.props.navigator.push({
          component: Login
        });
      });  
    });

  }
}

AppRegistry.registerComponent('Account', () => Account);
