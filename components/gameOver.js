import React, {Component} from 'react';
import Proptypes from 'prop-types';
import { Text, View, Button, BackAndroid} from 'react-native';
import { Constants, Audio } from 'expo';





export default class gameOver extends Component {

	static navigationOptions = {
		title: 'Game Over'
	};



	render () {
		const {navigate} = this.props.navigation;
	
	
  return (
    
	  <View>
	  <Text>game Over?</Text>
	  <Button 
          title="DON'T GIVE UP"
          onPress={async () => {
            const source = {
              uri: "http://www.slspencer.com/Sounds/Chewbacca/Chewie3.mp3" 
            };
            
            try {
              await Audio.setIsEnabledAsync(true);
              const sound = new Audio.Sound();
              await sound.loadAsync(source);
              await sound.playAsync(); 
            } catch(error) {
              console.error(error);
            }
	  		navigate('easyGrid')
          }}
        />
	  <Button
	  	onPress={() => navigate('Home')}
		title="Change Difficulty"
	 	/>
	  <Button
	  	onPress={() => BackAndroid.exitApp()}
		title="Give up"
	 	/>
	  </View>
	 
  );
}
}