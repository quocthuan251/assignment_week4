import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default class TodoDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {navigation} = this.props;
      const todoItem = navigation.getParam('data');
      const {
          status, body, id
      } =todoItem;
    return (
      <View style={styles.container}>
        <Text style={styles.status}> {id}. {status} </Text>
        <Text style={styles.body}>  {body} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
    flexDirection: 'column',
      justifyContent: 'center',
    
      alignItems:'center',
    },
    status: {
     color: 'green',
     justifyContent:'center',
    alignItems:'center',
      fontSize: 18,
     
    },
    body:{
        marginTop: 30,
        fontSize:22,
    }
  })
