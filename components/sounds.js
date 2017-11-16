import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Constants, Audio } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Chewie we're home"
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
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});