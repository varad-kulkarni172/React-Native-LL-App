import{View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
export default function LittleLemonHeader(){
  return(
    <NavigationContainer>
    <View style = {Headerstyles.container}>
    <Text style = {Headerstyles.innercontainer}>Litle Lemon</Text>
    </View>
    </NavigationContainer>
  );
}
const Headerstyles = StyleSheet.create({
  container:{
    flex: 0.11, alignItems: 'center', backgroundColor: 'maroon' 
  },
  innercontainer:{
    padding:37, fontSize :23, color:'black'
  },
});