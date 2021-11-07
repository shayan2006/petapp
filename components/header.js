import React from "react"
import {View, TextInput, Text, StyleSheet} from 'react-native'
import {header} from 'react-native-elements'

export default class Header extends React.Component {
    render(){
        return(
         <View>
             <Text
             style={styles.header}>
                Pet App
                </Text>

             <Text
             style={styles.bird}>
                Adopt A Bird
                </Text>

             <Text
             style={styles.cat}>
                Adopt A Cat
                </Text>

             <Text
             style={styles.dog}>
                Adopt A Dog
                </Text>

             <Text
             style={styles.fish}>
                Adopt A Fish
                </Text>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    textContainer:{
      backgroundColor: 'blue',
    },
    header:{
      color: 'Black',
      padding: 20,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    bird:{
        color: 'Blue',
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cat:{
        color: 'Blue',
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    dog:{
        color: 'Blue',
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    fish:{
        color: 'Blue',
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
  });
  
  export default Header;