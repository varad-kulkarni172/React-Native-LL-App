import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { validateEmail } from './utils';

const SubscribeScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = () => {
    if (validateEmail(email)) {
      Alert.alert('Subscribed!');
    } else {
      Alert.alert('Please enter a valid email address');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscribe to our newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        onChangeText={setEmail}
      />
      <Pressable
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
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

export default SubscribeScreen
