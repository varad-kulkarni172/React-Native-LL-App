import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
export default function LittleLemonFooter() {
  return (
    <NavigationContainer>
    <View
      style={FooterStyles.container}>
      <Text
        style={FooterStyles.innercontainer}>
        All rights reserved by Little Lemon, 2023{' '}
      </Text>
    </View>
    </NavigationContainer>
  );
}
const FooterStyles = StyleSheet.create({
  container:{
    backgroundColor: 'maroon',
    marginBottom: 0.1,
  },
  innercontainer:{
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});