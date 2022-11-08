/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
 import React, { Component } from 'react';
 import {Button, Text, View,Image,TouchableOpacity } from 'react-native';
 import { NavigationContainer,useNavigation } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };


  render() {
    return(
      <View >
        <TouchableOpacity>
          <Image  style={{width: "100%", height: "100%"}} source={require(`./assets/logo.png`)}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StartScreen;