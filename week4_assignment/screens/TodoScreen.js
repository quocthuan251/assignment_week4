import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, TextInput, Button, Alert, KeyboardAvoidingView ,ImageBackground} from 'react-native'
import { TODOS } from '../constants/Utils'
import TodoItem from '../components/TodoItem';

export default class TodoScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#FF6699',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      todoList: TODOS,
      inputText: '',
    };
  }
  onChange = text => {
    this.setState({
      inputText: text
    });
  };

  onSubmit = () => {
    const { todoList } = this.state;
    const newTodoItem = {
      body: this.state.inputText,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodoItem];
    this.setState({
      todoList: newTodoList,
      inputText: '',
    });
  };
  onPressTodoItem = id => {
    const { todoList } = this.state;
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    this.setState({
      todoList: newTodoList
    }, () => {
      setTimeout(() => {
        this.props.navigation.navigate('TodoDetail', { data: todo });
      }, 100);
    }
    );
  };
onDeleteTodo = id => {
  const {todoList} =  this.state;
    const newTodoList = todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList : newTodoList
    });
  };
  onLongPressTodoItem = todo => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
  render() {
    const { todoList, inputText } = this.state;
    return (
      <ImageBackground style={{ flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        backgroundColor: 'black',
        justifyContent: 'center'}} source={require('../assets/images/a1.jpg')}>
      <KeyboardAvoidingView
      enabled  behavior="padding"
      >
    <ScrollView contentContainerStyle={styles.container}>
        <View>
      {
        todoList.map(item => {
          return <TodoItem data={item} onPressButton={() => this.onPressTodoItem(item.id)}
            onLongPress={() => this.onLongPressTodoItem(item)} />
        })
      }</View>
      <TextInput style={styles.input} onChangeText={this.onChange}
        value={inputText}
      />
      <Button title='submit' style={styles.button} onPress={this.onSubmit} />
      <View></View>
    </ScrollView>
    </KeyboardAvoidingView>
    </ImageBackground>

    );
  }
}
// TodoScreen.navigationOptions = {
//   title: 'Home',
//   headerStyle:{
//     backgroundColor: '#FFFF33',
//   },
//   hearderTintColor:'#fff',
//   hearderTitleStyle:{
//     fontWeight:'bold',
//     fontSize: 20,
    
//   },
// };
const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    marginHorizontal: 15,
    paddingTop: 50,

  },
  input: {
    height: 50,
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 8,
    marginVertical: 65,
    textAlign:'center',
    backgroundColor:'white',
  },
  button:{
    marginTop: 222,
    
  }
})