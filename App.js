import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/welcomeScreen";
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/homeScreen';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text></Text>
      <WelcomeScreen/>  
    </View>
  );
  }
}

var AppNavigator = createSwitchNavigator({
  WelcomeScreen : WelcomeScreen,
  HomeScreen : HomeScreen
})

const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
