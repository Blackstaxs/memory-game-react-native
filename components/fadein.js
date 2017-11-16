import React from 'react';
import { AppRegistry, Animated, Switch, Image, Easing, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';





export default class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0), 
  	secondA: new Animated.Value(1),
  }

  componentDidMount() {
    Animated.timing(                
      this.state.fadeAnim,           
      {
        toValue: 100,                   
        
		duration: 150000,             
      	
		  
	  }
    ).start();                       
  		
	Animated.timing(                 
      this.state.secondA,            
      {
        toValue: 100,
    	easing: Easing.back,
    	duration: 2000,
      	
		  
	  }
    ).start(); 
	  
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View               
        style={{
          ...this.props.style,
          opacity: fadeAnim,         
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}


	
	


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	width: null,
	height:  null,
  },
	

});