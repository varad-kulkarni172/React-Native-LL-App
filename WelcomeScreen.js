import React, { Component } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./components/LittleLemonHeader.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.subtitle}>Sign up for our newsletter to get the latest updates</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Subscribe')}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default WelcomeScreen;
