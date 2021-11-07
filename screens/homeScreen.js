import React from "react"
import {View, TextInput, TouchableOpacity, Text,} from "react-native"
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import BirdScreen from "./birds";
import CatScreen from "./cats";
import DogScreen from "./dogs";
import FishScreen from "./fishes";

export default class HomeScreen extends React.Component {
    render(){
        return(
          <View>
              <Header/>
          </View>
        );
    }
}

var AppNavigator = createSwitchNavigator({
  b1 : BirdScreen,
  c1 : CatScreen,
  d1 : DogScreen,
  f1 : FishScreen
})

const AppContainer = createAppContainer(AppNavigator)