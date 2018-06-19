import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState(previous => {
        return {showText: !previous.showText};
      });
    }, 1000);

    
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hi, What's up!</Text>
        <Button 
          onPress={this._onPressButton} 
          title="戳我"/>
        <Greeting name='mashiguang'/>
        <Blink text="I like to blink."/>
        <Text>This is a long long long long long long long long long long long text. </Text>
        <Text style={styles.blue}>Blue, Blue, Blue</Text>


        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
    margin: 0
  },
  blue: {
    color: 'blue'
  }
});
