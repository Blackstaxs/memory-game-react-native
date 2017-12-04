import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


import HomeScreenComponent from "./components/HomeScreenComponent";
import grid3 from "./components/grid3";
import grid4 from "./components/grid4";
import grid5 from "./components/grid5";
import gameOver from "./components/gameOver";
import Foo from "./components/timer";






export const SimpleApp = StackNavigator({
	
	Home: {
		screen: HomeScreenComponent
	},
	easyGrid: {
		screen: grid3
	},
	normalGrid: {
		screen: grid4
	},
	hardGrid: {
		screen: grid5
	},
	timerTest: {
		screen: Foo
	},
	gameOver: {
		screen: gameOver
	}
});

export default class App extends Component {
  render() {
    return (
	
      <SimpleApp/>
	
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});