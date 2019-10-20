import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {TODOS} from '../constants/Utils'
export default class TodoItem extends Component {
 

  render() {
      const {
          data: { body, status },
          onPressButton,
          onLongPress
    } = this.props;
  

    const buttonStyle = 
 status  === 'Active' ? styles.activeButton : styles.normalButton;
    return (
       
      <TouchableOpacity style={buttonStyle} onPress={onPressButton}
      onLongPress={onLongPress}>
        <Text style={styles.text}>{body}</Text>
      </TouchableOpacity>
     
    );
  }
}
const styles = StyleSheet.create({
    normalButton:{
        backgroundColor: 'red',
        borderRadius: 8,
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 15,

    },
    activeButton:{
        backgroundColor: 'green',
        borderRadius: 8,
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 15,

    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    }
})

