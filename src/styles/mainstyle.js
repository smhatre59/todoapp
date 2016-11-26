'use strict';
import React, {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1
  },
  body: {
    flex: 9,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#F5FCFF',
  },
  primaryButton: {
    margin: 10,
    padding: 15,
    alignSelf:'center',
    backgroundColor:"blue",
    width:150
  },
  textEdit:{
    bottom:0,
    flex:1,
    width:300,
  },
  floatButton:{
    flex:1,
    top:48,
    left:50,
    alignSelf:'center',
    backgroundColor:'#34A34F'
  },
  footer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  }
});
