import React, {Component} from 'react';
import Proptypes from 'prop-types';
import { Text, View, Button, TouchableOpacity, BackAndroid, AppRegistry, Animated, Image, Easing, StyleSheet } from 'react-native';
import CountdownCircle from 'react-native-countdown-circle'

const timer = require('react-native-timer');


export default class Foo extends Component {
	
	
	
		constructor () {
  super()
 this.springValue = new Animated.Value(0.5)
  this.spinValue = new Animated.Value(0)
  this.spinValue2 = new Animated.Value(0)
  this.animatedValue = new Animated.Value(0)
  this.animatedValue3 = new Animated.Value(0)
}

	componentDidMount () {
  this.spin()
  this.spin2()
  this.animate()
  this.animate3()
  
}
	
	
spin () {
  this.spinValue.setValue(0)
  Animated.timing(
    this.spinValue,
    {
      toValue: 1,
      duration: 10000,
      easing: Easing.swing
    }
  ).start(() => this.spin())
}
	
spin2 () {
  this.spinValue2.setValue(0)
  Animated.timing(
    this.spinValue2,
    {
      toValue: 2,
      duration: 1000,
		delay: 5000,
      easing: Easing.swing
    }
  ).start(() => this.spin2())
}
	

	
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 30,
      duration: 60000,
      easing: Easing.linear

    }
  ).start(() => this.animate())
}


	
	animate3 () {
  this.animatedValue3.setValue(0)
  Animated.timing(
    this.animatedValue3,
    {
      toValue: 2,
      duration: 5000,
      easing: Easing.linear
    }
  ).start(() => this.animate3())
}
	
	spring() {
        this.springValue.setValue(0.5)
        Animated.spring(
            this.springValue,
            {
                toValue: 1.5,
                friction: 1
            }
        ).start()
    }
	
  state = {
    showMsg: false
  };

  componentWillUnmount() {
    timer.clearTimeout(this);
  }

  showMsg() {
    this.setState({showMsg: true}, () => timer.setTimeout(
      this, 'hideMsg', () => this.setState({showMsg: false}), 2000
    ));
  }

  render() {
	  const {navigate} = this.props.navigation;
	  const marginLeft = this.animatedValue.interpolate({
    inputRange: [-5, 1],
    outputRange: [-100, -50]
  });
	  const spin2 = this.spinValue2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '270deg']
  });
	  
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => requestAnimationFrame(() => this.showMsg())}>
          <Text>Press Me</Text>
        </TouchableOpacity>

        {this.state.showMsg ? (
          <Text>Hello!!</Text>
        ) : (
          null
        )}
		<CountdownCircle
            seconds={60}
            radius={30}
            borderWidth={8}
            color="#ff003f"
            bgColor="#fff"
            textStyle={{ fontSize: 20 }}
            onTimeElapsed={() => BackAndroid.exitApp()}
        />
		
		<Text
            style={{
                marginBottom: 75,
                color: 'white'
            }}
            onPress={this.spring.bind(this)}>Press Here To Intesify Shrugging</Text>
    <Animated.Image
			
            style={{
                width: 227,
                height: 200,
                transform: [{
                    scale: this.springValue
                }]
            }}
            source={{
                uri: 'https://vignette.wikia.nocookie.net/mcleodgaming/images/4/42/DK_big.gif/revision/latest/scale-to-width-down/185?cb=20110718184201'
            }}/>
			
			<Animated.Image
        style={{
	  	  marginLeft,
          width: 100,
          height: 100,
	  	  left: 240,
	   	  top: -90,
          transform: [{rotate: spin2}] }}
          source={{uri: 'https://vignette.wikia.nocookie.net/planetside2/images/7/73/Sol_Armor_Decal.png/revision/latest?cb=20130506085741'}}
      />
	  
	 
      </View>
    )
  }
}