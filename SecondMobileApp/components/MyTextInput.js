/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, TextInput, KeyboardAvoidingView, Button, TouchableOpacity, Text} from 'react-native';

class MyTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmail = (email) => {
    this.setState({email: email});
  };

  handlPassword = (password) => {
    this.setState({password: password});
  };

  handleLogin = () => {
    // eslint-disable-next-line no-alert
    alert(`email: ${this.state.email}\npassword: ${this.state.password}`);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <TextInput style={style.textInput} placeholder={'Email'}
          value={this.state.email} onChangeText={this.handleEmail} />
        <TextInput style={style.textInput} placeholder={'Password'}
          value={this.state.password} onChangeText={this.handlPassword}
          secureTextEntry />
        {/* <Button title="Submit" onPress={this.handleLogin} /> */}
        <TouchableOpacity style={style.submitButton} onPress={this.handleLogin}>
          <Text children={'Submit'} style={style.submitText} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  submitButton: {
    padding: 10,
    margin: 10,
    height: 40,
    backgroundColor: '#7a42f4',
  },
  submitText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  textInput: {
    margin: 10,
    height: 40,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
});

export default MyTextInput;
